const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "";

const normalizeBaseUrl = (value: string) => {
  const trimmed = value.trim();
  if (trimmed === "") {
    return "";
  }
  return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
};

export const fetchItems = async <T>(path: string): Promise<T[]> => {
  if (baseUrl.trim() === "") {
    return [];
  }

  const url = new URL(
    path.replace(/^\//, ""),
    normalizeBaseUrl(baseUrl),
  ).toString();

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return (payload?.items ?? []) as T[];
};
