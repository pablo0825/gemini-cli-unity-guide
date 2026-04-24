## Why

目前專案只有 Spectra 設定，還沒有可供學生使用的教學網站。現有教材雖然已整理成 PPT/PDF，但學生課後複習時缺少一個可快速跳步驟、查看重點截圖、並直接複製指令與 prompt 的操作介面，因此需要建立一個面向 Windows 初學者的 Gemini CLI 教學指南網站。

## What Changes

- 新增單一主題教學網站，主題為在 Windows 上安裝 Gemini CLI，並使用 Unity 2D 完成最小可玩版射擊遊戲 demo。
- 新增簡短首頁，說明教學目的、適合對象、學習成果、先備條件，並提供進入教學與快速跳章節的入口。
- 新增逐步教學閱讀體驗，保留線性的 Previous / Next 操作，同時提供章節與步驟快速跳轉。
- 新增步驟頁內容模型，讓每個步驟可呈現中文說明、單張主圖、以及可一鍵複製的指令或 prompt。
- 將教案內容依操作目標重新分步，但維持原始 PPT 章節順序，範圍包含 Node.js、Gemini CLI、GEMINI.md / Context、Unity 實作、Spec 概念。
- 第一版圖片資產允許先使用既有教材截圖，後續可替換為重新整理的資產。

## Non-Goals (optional)

- 不建立多教學入口平台或後台內容管理系統。
- 不在第一版導入 JSON、Markdown、CMS 等可編輯內容來源，教學內容先寫死在前端。
- 不在第一版加入教材下載區、外部連結資源區或多語系切換。
- 不在第一版將每個步驟設計成多圖輪播；每步只顯示一張主圖。

## Capabilities

### New Capabilities

- guide-home-and-navigation: 提供教學首頁、章節摘要、線性翻頁與章節/步驟快速跳轉，讓學生能進入教學並快速回到任一步驟。
- guide-step-experience: 提供逐步教學內容頁，顯示中文說明、單張示意圖、步驟進度，並允許使用者複製該步驟中的指令與 prompt。

### Modified Capabilities

(none)

## Impact

- Affected specs: guide-home-and-navigation, guide-step-experience
- Affected code:
  - New: package.json, tsconfig.json, vite.config.ts, index.html, src/main.tsx, src/App.tsx, src/data/guide.ts, src/components/, src/styles/, public/images/
  - Modified: (none)
  - Removed: (none)
