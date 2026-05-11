## Context

`CopyBlock` 是步驟頁面用來顯示可複製指令或 prompt 的元件。目前它以卡片結構渲染：header 區含 type label（"Command"/"Prompt"）、h4 label 標題、圖示複製按鈕；下方有 `<pre>` 程式碼內容與 caption 說明文字。

設計系統（`design-system.md`）的 `code-inline` 規格定義的是**單行終端機樣式**：程式碼文字靠左，複製按鈕靠右，無標題列、無框內說明文字。現有實作與規格的落差造成視覺層次過重。

此外，`app.css` 第 254 行的舊樣式群組將 `.copy-block` 與 `.hero-card` 等舊風格元件並列，套用了 `border-radius: 28px`、`border: 2px solid var(--border)` 等不符設計系統的樣式，雖然後面的規則會蓋掉，但語義衝突仍需清理。

## Goals / Non-Goals

**Goals:**

- 讓 `CopyBlock` 元件版面符合設計系統 `code-inline` 單行規格
- 將 `caption` 的渲染責任移至呼叫端 `GuideStepView`
- 清理 `app.css` 中過時的 `.copy-block` 樣式引用
- 保留複製圖示按鈕的現有行為（idle / copied / failed 狀態切換）

**Non-Goals:**

- 不修改 `CopyBlock` 的資料型別（`label`、`caption` 欄位仍保留在 data model 中，只是不在元件內渲染）
- 不加入 `$` 提示符
- 不更動 `guide.ts` 的資料結構
- 不修改概覽頁面（`OverviewPage`）的樣式

## Decisions

### 移除 CopyBlock 內的 label 與 type 標題

`label` 是指令的說明文字，在步驟頁面中已由 `InstructionBlock.title` 呈現，重複出現造成資訊冗餘。type label（"Command"/"Prompt"）對學習者無語意價值。兩者均從元件移除。

替代方案考量：將 label 改以小字顯示在框上方 → 但這與設計系統的單行規格相悖，且 instruction title 已承擔此職責。

### caption 移至呼叫端渲染

`caption` 是補充教學說明，視覺上屬於 hint 層，應與 `HintBlock` 保持一致的語言（框外、hint 樣式）。將渲染責任移至 `GuideStepView` 讓 `CopyBlock` 職責單純：只處理程式碼顯示與複製。

替代方案考量：在 `CopyBlock` 內加入 hint 樣式渲染 → 但這會讓元件混入佈局責任，違反單一職責。

### 清理 app.css 舊樣式群組

將 `.copy-block` 從第 254 行的舊樣式群組移除。後面第 885 行已有正確的設計系統樣式，保留舊群組中的 `.copy-block` 只會製造混亂。

## Implementation Contract

**行為（Behavior）：**

- `CopyBlock` 渲染一個單行容器：左側為 `<pre>` 程式碼文字，右側為複製圖示按鈕
- 容器無 label 標題、無 type label、無 caption 文字
- 複製按鈕維持三種狀態：idle（複製圖示）、copied（勾選圖示）、failed（複製圖示），狀態 2.2 秒後自動重置
- `GuideStepView` 在每個 `CopyBlock` 下方，若 `caption` 不為空，則渲染 caption 文字（使用 hint 樣式）

**介面（Interface）：**

- `CopyBlock` props 維持 `{ block: CopyBlock }`，不新增 prop
- `GuideStepView` 讀取 `block.caption` 決定是否渲染 caption，邏輯與現有 `hint` 渲染條件一致

**驗收標準：**

- 開啟任一含 command block 的步驟頁面，程式碼框只顯示指令文字與複製圖示，無 "Command" 標籤或 h4 標題
- 點擊複製圖示後，圖示切換為勾選並於 2.2 秒後恢復
- 若 `caption` 有內容，其文字顯示在程式碼框**下方**而非框內
- 若 `caption` 為空字串，不渲染空白 hint 區域

**範圍邊界：**

- 在範圍內：`CopyBlock.tsx`、`GuideStepView.tsx`、`app.css` 中的 `.copy-block` 相關樣式
- 在範圍外：`guide.ts` 資料結構、`OverviewPage`、`HintBlock`、`StepChecklistPanel`

## Risks / Trade-offs

- [風險] `GuideStepView` 中每個 copyBlock 迭代處都需要加入 caption 渲染邏輯，若有多個呼叫點未更新，caption 會靜默消失 → 緩解：tasks 中明確列出所有需要更新的渲染位置，驗收標準要求確認每個步驟頁面的 caption 均正確顯示
