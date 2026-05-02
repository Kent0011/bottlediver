import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type ResourceKey = "news" | "discography" | "live" | "video";
type FormValues = Record<string, string>;
type ResourceItem = {
  id: string;
  [key: string]: unknown;
};

type FieldDefinition = {
  name: string;
  label: string;
  kind: "text" | "textarea" | "url" | "array";
  required?: boolean;
  helperText?: string;
};

type ResourceDefinition = {
  key: ResourceKey;
  label: string;
  endpoint: string;
  description: string;
  fields: FieldDefinition[];
};

const SESSION_USERNAME = "admin_username";
const SESSION_PASSWORD = "admin_password";

const resourceDefinitions: ResourceDefinition[] = [
  {
    key: "news",
    label: "News",
    endpoint: "/news",
    description: "ニュースの作成・更新・削除を行います。",
    fields: [
      { name: "title", label: "タイトル", kind: "text", required: true },
      {
        name: "image",
        label: "画像 URL",
        kind: "url",
        helperText: "未入力なら送信しません。",
      },
      {
        name: "content",
        label: "本文",
        kind: "textarea",
        required: true,
      },
    ],
  },
  {
    key: "discography",
    label: "Discography",
    endpoint: "/discography",
    description: "配信リンクと楽曲一覧を含む作品情報を管理します。",
    fields: [
      { name: "title", label: "タイトル", kind: "text", required: true },
      {
        name: "image",
        label: "画像 URL",
        kind: "url",
        helperText: "未入力なら送信しません。",
      },
      {
        name: "musics",
        label: "収録曲",
        kind: "array",
        required: true,
        helperText: "1行に1曲ずつ入力します。",
      },
      {
        name: "applemusic_link",
        label: "Apple Music URL",
        kind: "url",
        required: true,
      },
      {
        name: "spotify_link",
        label: "Spotify URL",
        kind: "url",
        required: true,
      },
      {
        name: "youtubemusic_link",
        label: "YouTube Music URL",
        kind: "url",
        required: true,
      },
      {
        name: "linemusic_link",
        label: "LINE MUSIC URL",
        kind: "url",
        required: true,
      },
      {
        name: "amazonmusic_link",
        label: "Amazon Music URL",
        kind: "url",
        required: true,
      },
    ],
  },
  {
    key: "live",
    label: "Live",
    endpoint: "/live",
    description: "ライブ情報と詳細リンクを管理します。",
    fields: [
      { name: "title", label: "タイトル", kind: "text", required: true },
      {
        name: "image",
        label: "画像 URL",
        kind: "url",
        helperText: "未入力なら送信しません。",
      },
      { name: "where", label: "会場", kind: "text", required: true },
      {
        name: "with",
        label: "共演者",
        kind: "array",
        required: true,
        helperText: "1行に1組ずつ入力します。",
      },
      { name: "ticket", label: "チケット", kind: "text", required: true },
      { name: "time", label: "時間", kind: "text", required: true },
      { name: "link", label: "詳細 URL", kind: "url", required: true },
    ],
  },
  {
    key: "video",
    label: "Video",
    endpoint: "/video",
    description: "動画タイトルと公開 URL を管理します。",
    fields: [
      { name: "title", label: "タイトル", kind: "text", required: true },
      { name: "link", label: "動画 URL", kind: "url", required: true },
    ],
  },
];

const createEmptyForms = () =>
  resourceDefinitions.reduce(
    (accumulator, definition) => {
      accumulator[definition.key] = definition.fields.reduce(
        (fieldAccumulator, field) => {
          fieldAccumulator[field.name] = "";
          return fieldAccumulator;
        },
        {} as FormValues,
      );
      return accumulator;
    },
    {} as Record<ResourceKey, FormValues>,
  );

const createEmptyItems = () =>
  resourceDefinitions.reduce(
    (accumulator, definition) => {
      accumulator[definition.key] = [];
      return accumulator;
    },
    {} as Record<ResourceKey, ResourceItem[]>,
  );

const createEmptyEditingIds = () =>
  resourceDefinitions.reduce(
    (accumulator, definition) => {
      accumulator[definition.key] = null;
      return accumulator;
    },
    {} as Record<ResourceKey, string | null>,
  );

const normalizeBaseUrl = (value: string) => {
  const trimmed = value.trim();
  if (trimmed === "") {
    return "";
  }

  return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
};

const buildApiUrl = (baseUrl: string, path: string) =>
  new URL(path.replace(/^\//, ""), normalizeBaseUrl(baseUrl)).toString();

const encodeBasicAuth = (username: string, password: string) =>
  window.btoa(`${username}:${password}`);

const createApiError = async (response: Response) => {
  const payload = await response.json().catch(() => null);
  const message =
    payload?.error?.message ??
    payload?.message ??
    `API request failed with status ${response.status}`;

  return new Error(message);
};

const itemToFormValues = (
  definition: ResourceDefinition,
  item: ResourceItem,
): FormValues =>
  definition.fields.reduce((accumulator, field) => {
    const value = item[field.name];
    accumulator[field.name] = Array.isArray(value)
      ? value.join("\n")
      : typeof value === "string"
        ? value
        : "";
    return accumulator;
  }, {} as FormValues);

const formValuesToPayload = (
  definition: ResourceDefinition,
  values: FormValues,
) =>
  definition.fields.reduce(
    (accumulator, field) => {
      const rawValue = values[field.name]?.trim() ?? "";

      if (field.kind === "array") {
        accumulator[field.name] = rawValue
          .split("\n")
          .map((value) => value.trim())
          .filter(Boolean);
        return accumulator;
      }

      if (rawValue !== "") {
        accumulator[field.name] = rawValue;
      }

      return accumulator;
    },
    {} as Record<string, string | string[]>,
  );

const renderItemValue = (field: FieldDefinition, value: unknown) => {
  if (value === undefined || value === null) {
    return null;
  }

  if (field.name === "image" && typeof value === "string" && value !== "") {
    return (
      <Stack spacing={1}>
        <Box
          component="img"
          src={value}
          alt=""
          sx={{
            width: "100%",
            maxWidth: "240px",
            borderRadius: 1,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
        <Link href={value} target="_blank" rel="noreferrer" underline="hover">
          {value}
        </Link>
      </Stack>
    );
  }

  if (field.kind === "url" && typeof value === "string" && value !== "") {
    return (
      <Link href={value} target="_blank" rel="noreferrer" underline="hover">
        {value}
      </Link>
    );
  }

  if (Array.isArray(value)) {
    return (
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {value.join("\n")}
      </Typography>
    );
  }

  return (
    <Typography sx={{ whiteSpace: "pre-line", wordBreak: "break-word" }}>
      {String(value)}
    </Typography>
  );
};

const Admin = () => {
  const [apiBaseUrl, setApiBaseUrl] = useState(
    () => process.env.REACT_APP_API_BASE_URL ?? "",
  );
  const expectedUsername = process.env.REACT_APP_BASIC_USERNAME ?? "";
  const expectedPassword = process.env.REACT_APP_BASIC_PASSWORD ?? "";
  const [username, setUsername] = useState(
    () => window.sessionStorage.getItem(SESSION_USERNAME) ?? "",
  );
  const [password, setPassword] = useState(
    () => window.sessionStorage.getItem(SESSION_PASSWORD) ?? "",
  );
  const matchesExpectedCredentials = useCallback(
    (candidateUsername: string, candidatePassword: string) =>
      candidateUsername === expectedUsername &&
      candidatePassword === expectedPassword,
    [expectedPassword, expectedUsername],
  );
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    matchesExpectedCredentials(
      window.sessionStorage.getItem(SESSION_USERNAME) ?? "",
      window.sessionStorage.getItem(SESSION_PASSWORD) ?? "",
    ),
  );
  const [selectedTab, setSelectedTab] = useState(0);
  const [itemsByResource, setItemsByResource] = useState(createEmptyItems);
  const [forms, setForms] = useState(createEmptyForms);
  const [editingIds, setEditingIds] = useState(createEmptyEditingIds);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isLoadingResources, setIsLoadingResources] = useState(false);
  const [busyResourceKey, setBusyResourceKey] = useState<ResourceKey | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusSeverity, setStatusSeverity] = useState<"success" | "error">(
    "success",
  );

  const activeDefinition = resourceDefinitions[selectedTab];
  const hasExpectedCredentials = useMemo(
    () => expectedUsername !== "" && expectedPassword !== "",
    [expectedPassword, expectedUsername],
  );
  const hasConnectionInfo = useMemo(
    () =>
      apiBaseUrl.trim() !== "" &&
      hasExpectedCredentials &&
      username.trim() !== "" &&
      password !== "",
    [apiBaseUrl, hasExpectedCredentials, password, username],
  );

  const showStatus = (severity: "success" | "error", message: string) => {
    setStatusSeverity(severity);
    setStatusMessage(message);
  };

  const resetEditor = (resourceKey: ResourceKey) => {
    setForms((current) => ({
      ...current,
      [resourceKey]: createEmptyForms()[resourceKey],
    }));
    setEditingIds((current) => ({
      ...current,
      [resourceKey]: null,
    }));
  };

  const request = useCallback(
    async (
      path: string,
      init: RequestInit = {},
      options?: {
        baseUrl?: string;
        username?: string;
        password?: string;
        requireAuth?: boolean;
      },
    ) => {
      const resolvedBaseUrl = options?.baseUrl ?? apiBaseUrl;
      if (resolvedBaseUrl.trim() === "") {
        throw new Error("API ベース URL を入力してください。");
      }

      const headers = new Headers(init.headers);
      if (init.body && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }

      if (options?.requireAuth) {
        const resolvedUsername = options.username ?? username;
        const resolvedPassword = options.password ?? password;

        if (resolvedUsername.trim() === "" || resolvedPassword === "") {
          throw new Error(
            "Basic 認証のユーザー名とパスワードを入力してください。",
          );
        }

        headers.set(
          "Authorization",
          `Basic ${encodeBasicAuth(resolvedUsername, resolvedPassword)}`,
        );
      }

      const response = await fetch(buildApiUrl(resolvedBaseUrl, path), {
        ...init,
        headers,
      });

      if (!response.ok) {
        throw await createApiError(response);
      }

      if (response.status === 204) {
        return null;
      }

      return response.json();
    },
    [apiBaseUrl, password, username],
  );

  const loadAllResources = useCallback(
    async (
      baseUrlOverride?: string,
      credentials?: { username: string; password: string },
    ) => {
      const resolvedBaseUrl = baseUrlOverride ?? apiBaseUrl;
      if (resolvedBaseUrl.trim() === "") {
        return;
      }

      setIsLoadingResources(true);

      try {
        const responses = await Promise.all(
          resourceDefinitions.map(async (definition) => {
            const payload = await request(definition.endpoint, undefined, {
              baseUrl: resolvedBaseUrl,
              username: credentials?.username,
              password: credentials?.password,
            });

            return {
              key: definition.key,
              items: (payload?.items ?? []) as ResourceItem[],
            };
          }),
        );

        setItemsByResource((current) => {
          const next = { ...current };
          responses.forEach(({ key, items }) => {
            next[key] = items;
          });
          return next;
        });
      } finally {
        setIsLoadingResources(false);
      }
    },
    [apiBaseUrl, request],
  );

  useEffect(() => {
    if (isAuthenticated) {
      void loadAllResources();
    }
  }, [isAuthenticated, loadAllResources]);

  const handleAuthenticate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasConnectionInfo) {
      if (apiBaseUrl.trim() === "") {
        showStatus("error", "REACT_APP_API_BASE_URL を設定してください。");
        return;
      }

      if (!hasExpectedCredentials) {
        showStatus(
          "error",
          "BASIC_USERNAME / BASIC_PASSWORD を設定してください。",
        );
        return;
      }

      showStatus(
        "error",
        "Basic 認証のユーザー名・パスワードを入力してください。",
      );
      return;
    }

    setIsAuthenticating(true);

    try {
      if (!matchesExpectedCredentials(username, password)) {
        window.sessionStorage.removeItem(SESSION_USERNAME);
        window.sessionStorage.removeItem(SESSION_PASSWORD);
        setIsAuthenticated(false);
        setItemsByResource(createEmptyItems());
        setForms(createEmptyForms());
        setEditingIds(createEmptyEditingIds());
        showStatus("error", "ユーザー名またはパスワードが正しくありません。");
        return;
      }

      window.sessionStorage.setItem(SESSION_USERNAME, username);
      window.sessionStorage.setItem(SESSION_PASSWORD, password);
      setApiBaseUrl(normalizeBaseUrl(apiBaseUrl));
      setIsAuthenticated(true);
      await loadAllResources(normalizeBaseUrl(apiBaseUrl), {
        username,
        password,
      });
      showStatus(
        "success",
        "接続設定を保存しました。保護された操作の認証結果は実行時に確認されます。",
      );
    } catch (error) {
      setIsAuthenticated(false);
      showStatus(
        "error",
        error instanceof Error
          ? error.message
          : "接続設定の保存に失敗しました。",
      );
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(SESSION_USERNAME);
    window.sessionStorage.removeItem(SESSION_PASSWORD);
    setIsAuthenticated(false);
    setItemsByResource(createEmptyItems());
    setForms(createEmptyForms());
    setEditingIds(createEmptyEditingIds());
    showStatus("success", "認証情報を破棄しました。");
  };

  const handleFieldChange = (
    resourceKey: ResourceKey,
    fieldName: string,
    value: string,
  ) => {
    setForms((current) => ({
      ...current,
      [resourceKey]: {
        ...current[resourceKey],
        [fieldName]: value,
      },
    }));
  };

  const handleEdit = (definition: ResourceDefinition, item: ResourceItem) => {
    setForms((current) => ({
      ...current,
      [definition.key]: itemToFormValues(definition, item),
    }));
    setEditingIds((current) => ({
      ...current,
      [definition.key]: item.id,
    }));
  };

  const handleSubmit = async (definition: ResourceDefinition) => {
    setBusyResourceKey(definition.key);

    try {
      const payload = formValuesToPayload(definition, forms[definition.key]);
      const editingId = editingIds[definition.key];
      const path = editingId
        ? `${definition.endpoint}/${editingId}`
        : definition.endpoint;

      await request(
        path,
        {
          method: editingId ? "PUT" : "POST",
          body: JSON.stringify(payload),
        },
        {
          requireAuth: true,
        },
      );

      await loadAllResources();
      resetEditor(definition.key);
      showStatus(
        "success",
        editingId
          ? `${definition.label} を更新しました。`
          : `${definition.label} を作成しました。`,
      );
    } catch (error) {
      showStatus(
        "error",
        error instanceof Error ? error.message : "保存に失敗しました。",
      );
    } finally {
      setBusyResourceKey(null);
    }
  };

  const handleDelete = async (definition: ResourceDefinition, id: string) => {
    if (!window.confirm(`${definition.label} の ID ${id} を削除しますか？`)) {
      return;
    }

    setBusyResourceKey(definition.key);

    try {
      await request(
        `${definition.endpoint}/${id}`,
        {
          method: "DELETE",
        },
        {
          requireAuth: true,
        },
      );

      await loadAllResources();
      if (editingIds[definition.key] === id) {
        resetEditor(definition.key);
      }
      showStatus("success", `${definition.label} を削除しました。`);
    } catch (error) {
      showStatus(
        "error",
        error instanceof Error ? error.message : "削除に失敗しました。",
      );
    } finally {
      setBusyResourceKey(null);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #14202c 0%, #101922 45%, #0a1016 100%)",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              background:
                "linear-gradient(135deg, rgba(41,182,246,0.15), rgba(20,32,44,0.9))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Stack spacing={1.5}>
              <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 40 } }}>
                Data Console
              </Typography>
            </Stack>
          </Paper>

          <Paper sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack component="form" spacing={2} onSubmit={handleAuthenticate}>
              <Typography variant="h6">SECRET</Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  label="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  disabled={isAuthenticated}
                  fullWidth
                  required
                />
                <TextField
                  label="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={isAuthenticated}
                  fullWidth
                  required
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isAuthenticating}
                >
                  {isAuthenticating ? "authorizing..." : "authorize"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => void loadAllResources()}
                  disabled={!isAuthenticated || isLoadingResources}
                >
                  reload
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  onClick={handleLogout}
                  disabled={!isAuthenticated}
                >
                  logout
                </Button>
              </Stack>
            </Stack>
          </Paper>

          {statusMessage && (
            <Alert severity={statusSeverity}>{statusMessage}</Alert>
          )}

          {!hasExpectedCredentials && (
            <Alert severity="error">
              環境変数 `BASIC_USERNAME` と `BASIC_PASSWORD` が未設定です。
            </Alert>
          )}

          {!isAuthenticated ? (
            <Alert severity="info">
              認証が完了するまで、管理操作は利用できません。
            </Alert>
          ) : (
            <Paper sx={{ overflow: "hidden" }}>
              <Tabs
                value={selectedTab}
                onChange={(_event, nextValue) => setSelectedTab(nextValue)}
                variant="scrollable"
                scrollButtons="auto"
              >
                {resourceDefinitions.map((definition) => (
                  <Tab
                    key={definition.key}
                    label={`${definition.label} (${itemsByResource[definition.key].length})`}
                  />
                ))}
              </Tabs>
              <Divider />

              <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h5">
                      {activeDefinition.label}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                      {activeDefinition.description}
                    </Typography>
                  </Box>

                  <Card variant="outlined">
                    <CardContent>
                      <Stack spacing={2}>
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1.5}
                          justifyContent="space-between"
                        >
                          <Typography variant="h6">
                            {editingIds[activeDefinition.key]
                              ? "編集フォーム"
                              : "新規作成フォーム"}
                          </Typography>
                          {editingIds[activeDefinition.key] && (
                            <Button
                              variant="text"
                              onClick={() => resetEditor(activeDefinition.key)}
                            >
                              編集をキャンセル
                            </Button>
                          )}
                        </Stack>

                        {activeDefinition.fields.map((field) => {
                          const value =
                            forms[activeDefinition.key][field.name] ?? "";
                          const multiline =
                            field.kind === "textarea" || field.kind === "array";

                          return (
                            <TextField
                              key={field.name}
                              label={field.label}
                              value={value}
                              onChange={(event) =>
                                handleFieldChange(
                                  activeDefinition.key,
                                  field.name,
                                  event.target.value,
                                )
                              }
                              required={field.required}
                              fullWidth
                              type={field.kind === "url" ? "url" : "text"}
                              multiline={multiline}
                              minRows={
                                field.kind === "textarea"
                                  ? 6
                                  : field.kind === "array"
                                    ? 4
                                    : undefined
                              }
                              helperText={field.helperText}
                            />
                          );
                        })}

                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1.5}
                        >
                          <Button
                            variant="contained"
                            onClick={() => void handleSubmit(activeDefinition)}
                            disabled={busyResourceKey === activeDefinition.key}
                          >
                            {editingIds[activeDefinition.key]
                              ? "更新する"
                              : "作成する"}
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => resetEditor(activeDefinition.key)}
                            disabled={busyResourceKey === activeDefinition.key}
                          >
                            入力をクリア
                          </Button>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>

                  <Stack spacing={2}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1.5}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                    >
                      <Typography variant="h6">登録済み一覧</Typography>
                      {isLoadingResources && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CircularProgress size={18} />
                          <Typography variant="body2">読込中</Typography>
                        </Stack>
                      )}
                    </Stack>

                    {itemsByResource[activeDefinition.key].length === 0 ? (
                      <Alert severity="warning">登録データがありません。</Alert>
                    ) : (
                      itemsByResource[activeDefinition.key].map((item) => (
                        <Card key={item.id} variant="outlined">
                          <CardContent>
                            <Stack spacing={2}>
                              <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={1.5}
                                justifyContent="space-between"
                              >
                                <Box>
                                  <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                  >
                                    ID
                                  </Typography>
                                  <Typography>{item.id}</Typography>
                                </Box>
                                <Stack direction="row" spacing={1}>
                                  <Button
                                    variant="outlined"
                                    onClick={() =>
                                      handleEdit(activeDefinition, item)
                                    }
                                  >
                                    編集
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() =>
                                      void handleDelete(
                                        activeDefinition,
                                        item.id,
                                      )
                                    }
                                    disabled={
                                      busyResourceKey === activeDefinition.key
                                    }
                                  >
                                    削除
                                  </Button>
                                </Stack>
                              </Stack>

                              <Divider />

                              {activeDefinition.fields.map((field) => {
                                const value = item[field.name];
                                if (
                                  value === undefined ||
                                  value === null ||
                                  value === "" ||
                                  (Array.isArray(value) && value.length === 0)
                                ) {
                                  return null;
                                }

                                return (
                                  <Box key={`${item.id}-${field.name}`}>
                                    <Typography
                                      variant="subtitle2"
                                      color="text.secondary"
                                      sx={{ mb: 0.5 }}
                                    >
                                      {field.label}
                                    </Typography>
                                    {renderItemValue(field, value)}
                                  </Box>
                                );
                              })}
                            </Stack>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Admin;
