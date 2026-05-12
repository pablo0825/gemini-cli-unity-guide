## Why

Guide 模式的頁首目前右側顯示「回首頁」按鈕，與設計系統規範不符——規範要求右側顯示當前章節資訊，並以線稿星形圖示取代實心星形 badge。調整後頁首資訊更豐富，視覺也更符合設計系統 §06 頁首規範。

## What Changes

- **星形圖示**：新增 `public/icons/star.svg`（線稿，24×24，stroke-width 1.8），取代目前以 Unicode `★` 字符渲染的實心星形 badge
- **右側內容**：移除「回首頁」按鈕，改為純文字章節資訊（`{chapterEyebrow} · {chapterTitle}`），套用 `--text-caption` / `--color-text-secondary`
- **回首頁功能**：保留在品牌按鈕（星形 + 標題）的點擊事件，`onClick={openOverview}` 不變

## Non-Goals

- 不修改 Overview 頁的頁首（Overview 頁頁首只有品牌按鈕，不涉及章節資訊）
- 不調整頁首容器的 padding、邊框、背景等已符合設計系統的屬性
- 不新增「收藏」功能（星形僅作視覺圖示，點擊仍為回首頁）

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `guide-home-and-navigation`：頁首在 guide 模式下的右側顯示當前章節資訊，以及星形改為線稿圖示

## Impact

- Affected specs: `guide-home-and-navigation`
- Affected code:
  - New: `public/icons/star.svg`
  - Modified: `src/App.tsx`
  - Modified: `src/styles/app.css`
