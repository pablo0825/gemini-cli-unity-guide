## Why

目前 CopyBlock 的複製動作以文字顯示，按鈕在卡片標題列中佔用較多空間，且目前文字內容存在編碼顯示異常。改用既有 public/icons/copy.svg 與 public/icons/check.svg 可以讓操作更精簡，同時保留狀態回饋與可存取性名稱。

## What Changes

- 將 CopyBlock 的複製按鈕內容由可見文字改為圖示顯示。
- idle 與 failed 狀態使用 public/icons/copy.svg，copied 狀態使用 public/icons/check.svg。
- 保留按鈕的可存取性文字，例如 aria-label 或 visually hidden text，避免 icon-only button 對螢幕閱讀器失去語意。
- 調整 CopyBlock 相關 CSS，讓 icon button 在桌面與手機版都有穩定尺寸、對齊、hover 與 focus 狀態。
- 複製成功與失敗的狀態邏輯維持現有行為，不改變 clipboard API 使用方式。

## Non-Goals

- 不新增 lucide-react 或其他 icon 套件，直接使用現有 public/icons 資產。
- 不更動 CopyBlock 的資料結構、copy block 內容來源或 guide step 的排版架構。
- 不重新設計整個 copy block 卡片、章節導覽或 lesson flow。
- 不新增 toast、modal、tooltip 或全站通知系統；本次只處理按鈕自身的 icon 與狀態表達。
- 不把 failed 狀態擴充成新的錯誤復原流程；只保留失敗語意與可存取性名稱。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `guide-step-experience`: copyable command and prompt blocks keep the existing copy behavior while presenting the action as an icon-only control with accessible state text.

## Impact

- Affected specs: guide-step-experience
- Affected code:
  - Modified: src/components/CopyBlock.tsx
  - Modified: src/styles/app.css
  - New: none
  - Removed: none
- Affected assets:
  - Reused: public/icons/copy.svg
  - Reused: public/icons/check.svg
- Dependencies: none
