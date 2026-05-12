## 1. 新增線稿星形 SVG 圖示

- [x] 1.1 新增 `public/icons/star.svg`，內容為 24×24 outline 星形，stroke-width 1.8，stroke 使用 currentColor，fill 為 none。驗證：SVG 檔案存在且在瀏覽器中呈現為線稿星形（非實心），符合 Requirement「Guide header displays guide title and current chapter context」中「outline SVG (24×24, stroke-width 1.8)」規範。

## 2. 更新 Guide 模式頁首 JSX

- [x] 2.1 在 `src/App.tsx` 的 guide 模式 header（`app-shell--guide` 分支）中，將 `.brand-button__badge` 內的 Unicode `★` 字符替換為 `<img>` 標籤引用 `star.svg`，使星形以 SVG 圖示呈現。驗證：瀏覽器中頁首左側星形為線稿而非實心，符合 Requirement「Guide header displays guide title and current chapter context」。

- [x] 2.2 在 `src/App.tsx` 的 guide 模式 header 中，移除「回首頁」`home-link` button，改為純文字元素顯示 `{activeChapter.eyebrow} · {activeChapter.title}`，章節資訊由 `activeChapter`（已在同層可用）取得。驗證：瀏覽器中頁首右側顯示「Chapter 1 · 環境準備」等章節文字而非「回首頁」按鈕，且切換步驟至不同章節時文字即時更新，符合 Requirement「Guide header displays guide title and current chapter context」及「Chapter label updates when the learner changes chapters」。

- [x] 2.3 確認 `brand-button` 的 `onClick={openOverview}` 仍完整保留，覆蓋星形圖示與標題文字兩者。驗證：點擊頁首星形或標題後回到 Overview 頁，符合 Requirement「Clicking the header title returns to the overview」；頁首中無其他獨立的回首頁按鈕，符合 Requirement「Guide header does not show a standalone back button」。

## 3. 更新頁首 CSS 樣式

- [x] 3.1 在 `src/styles/app.css` 中調整 `.app-shell--guide .brand-button__badge` 樣式：移除 `border`、`background`、`box-shadow` 等 badge 外框樣式，改為單純的圖示容器（24×24，`color: var(--color-text-muted)`），使星形 SVG 以 muted 色呈現。驗證：瀏覽器中星形無外框圓圈背景，僅顯示線稿圖示，符合設計系統 §06 頁首「收藏星：24×24 線稿圖示，色 --color-text-muted」規範。

- [x] 3.2 在 `src/styles/app.css` 中新增章節資訊文字的樣式（class 名稱如 `.header-chapter`），套用 `font-size: var(--text-caption)`、`color: var(--color-text-secondary)`，並移除 `.app-shell--guide .home-link` 相關樣式。驗證：瀏覽器中頁首右側章節文字為 caption 大小且為次要文字色，符合 Requirement「Guide header displays guide title and current chapter context」中章節標籤的規範。

## 4. 視覺驗收

- [x] 4.1 啟動開發伺服器，逐一確認：頁首左側為線稿星形 + 標題（semibold 深色）；右側為「Chapter X · 章節名稱」（caption 次要色）；點擊星形或標題回到 Overview；切換不同章節的步驟時右側文字更新；無「回首頁」按鈕。符合「Guide header displays guide title and current chapter context」所有 Scenarios。
