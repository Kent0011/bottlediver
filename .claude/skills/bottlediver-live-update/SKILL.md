---
name: bottlediver-live-update
description: Bottle Diver（ボトルダイバー）のライブ情報を更新するスキル。x.com/bottle_diver にアクセスして最新のライブ情報を取得し、bottlediver/src/components/Live.tsx から終了済みのライブを削除して新しいライブを追加する。「ライブ情報を更新して」「Live.tsx を更新して」「新しいライブを追加して」「過去のライブを削除して」などのリクエストには必ずこのスキルを使うこと。
---

# Bottle Diver ライブ情報更新スキル

## 目的

`bottlediver/src/components/Live.tsx` のライブ情報を最新の状態に保つ。
- x.com/bottle_diver から新しいライブ告知を取得する
- 現在日付より過去のライブを削除する
- 新しいライブを追加する

## ファイルパス

- 対象ファイル: `bottlediver/src/components/Live.tsx`
- 参照コンポーネント: `bottlediver/src/components/LiveContent.tsx`

## 手順

### 1. 現在のライブ情報を確認する

`bottlediver/src/components/Live.tsx` を読み込み、現在掲載されているライブ一覧を把握する。

### 2. 最新情報を取得する

`https://x.com/bottle_diver` にアクセスし、ライブ告知ツイートを確認する。
取得できない場合は、ユーザーに手動で情報を提供してもらう。

### 3. 終了済みライブを削除する

現在日付（システムの `currentDate`）と各ライブの日付を比較し、**過去の日付のライブを削除**する。
削除単位は下記「DOM構造の単位」を参照。

### 4. 新しいライブを追加する

取得した新しいライブ情報を、**日付の新しい順（上が最新）** で追加する。

---

## DOM構造の単位

ライブ情報は以下の2つの要素をひとまとまりとして扱う。追加・削除は必ずこの単位で行う。

```tsx
<FadeAnimation>
  <LiveContent
    title="YYYY.M.D - イベント名（略称）"
    modalTitle="YYYY.M.D - イベント詳細名（フルタイトル）"
    place="会場名"
    with="出演バンド1 / 出演バンド2 / 出演バンド3"
    time="OPEN: HH:MM / START: HH:MM"
    ticket="ADV ¥XXXX / DOOR ¥XXXX (+1D)"
    link="https://x.com/..."
  />
</FadeAnimation>
<FadeAnimation>
  <Divider variant="middle" />
</FadeAnimation>
```

### 各プロパティの書式

| プロパティ | 書式・例 |
|---|---|
| `title` | `"YYYY.M.D - イベント名"` （例: `"2026.2.21 - 夜叉子 誘拐Tour Final"`） |
| `modalTitle` | `"YYYY.M.D - イベント詳細名"` （例: `"2026.2.21 - 夜叉子2nd EP『解体新唱』release tour「誘拐」Final"`） |
| `place` | 会場名のみ（例: `"KOBE Padoma"`） |
| `with` | 出演バンドを ` / ` で区切る（例: `"夜叉子 / NIHIL / ポピーハイポ"`） |
| `time` | `"OPEN: HH:MM / START: HH:MM"` |
| `ticket` | `"ADV ¥XXXX / DOOR ¥XXXX (+1D)"` |
| `link` | ツイートURL または 告知ページURL |
| `image` | フライヤー画像ファイル名（任意。`public/` 以下に配置） |

### 配置場所

すべてのライブ情報は `<Box sx={{ maxWidth: "800px", margin: "0 auto" }}>` の内部に配置する。

```tsx
<Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
  {/* 最新のライブ（1件目） */}
  <FadeAnimation>
    <LiveContent ... />
  </FadeAnimation>
  <FadeAnimation>
    <Divider variant="middle" />
  </FadeAnimation>

  {/* 2件目以降も同様 */}
  <FadeAnimation>
    <LiveContent ... />
  </FadeAnimation>
  <FadeAnimation>
    <Divider variant="middle" />
  </FadeAnimation>
</Box>
```

## 注意事項

- ライブ情報がゼロ件になる場合でも、`<Box sx={{ maxWidth: "800px", margin: "0 auto" }}>` は残す
- 情報が不足している場合（チケット代不明など）は、ユーザーに確認してから更新する
- x.com にアクセスできない場合は、その旨をユーザーに伝え、手動で情報を提供してもらう
