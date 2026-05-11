## Why

`CopyBlock` 元件目前以卡片式多區塊結構渲染（type label、h4 標題、pre、caption），與設計系統 `code-inline` 規格的單行樣式不符。此落差導致步驟頁面的程式碼區塊視覺層次過重、佔用空間過多，並引入設計系統未定義的 UI 元素（label 標題、框內 caption）。

## What Changes

- 移除 `CopyBlock` 元件內的 type label（"Command" / "Prompt"）顯示
- 移除 `CopyBlock` 元件內的 h4 label 標題顯示
- 將 `caption` 欄位從元件內部移出，改由呼叫端（`GuideStepView`）在程式碼框外以 hint 樣式渲染
- 將 `CopyBlock` 版面改為單行：程式碼文字靠左，複製圖示靠右
- 移除 `app.css` 舊樣式群組中的 `.copy-block` 選擇器（該群組套用了舊版 `border-radius: 28px` 等不符設計系統的樣式）

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `guide-step-experience`：程式碼區塊的視覺呈現規則由卡片式改為設計系統的單行 `code-inline` 樣式；caption 渲染位置從元件內部移至呼叫端

## Impact

- Affected specs: `guide-step-experience`
- Affected code:
  - Modified: `src/components/CopyBlock.tsx`
  - Modified: `src/components/GuideStepView.tsx`
  - Modified: `src/styles/app.css`
