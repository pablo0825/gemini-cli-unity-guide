## 1. 清理 app.css 舊樣式群組

- [x] 1.1 清理 app.css 舊樣式群組：從 `app.css` 中的舊樣式群組移除 `.copy-block` 選擇器，使 `CopyBlock` 不再套用舊風格的 `border: 2px solid var(--border); border-radius: 28px` 規則，確保「Step page follows the local design system」的視覺規則只由設計系統 token 驅動。驗收：瀏覽器開發工具確認 `.copy-block` 元素的 `border-radius` 來源為設計系統的 `var(--radius-md)`，而非舊群組。

## 2. 重構 CopyBlock 元件

- [x] 2.1 移除 CopyBlock 內的 label 與 type 標題：從 `CopyBlock.tsx` 移除 type label（`copy-block__type`）和 h4 label 標題，使元件的 JSX 不再輸出 `<p className="copy-block__type">` 和 `<h4>` 元素。驗收：開啟任一步驟頁面，程式碼框內無 "Command" / "Prompt" 文字及 label 標題。

- [x] 2.2 移除 `CopyBlock.tsx` 中的 `copy-block__header` 包裝 div，改為直接在 `article.copy-block` 內以 flexbox 單行排列 `<pre>` 和複製按鈕（code 靠左、按鈕靠右）。驗收：程式碼框呈現單行：左側為指令文字，右側為圖示按鈕，無多層 div 包裝。

- [x] 2.3 移除 `CopyBlock.tsx` 中 `copy-block__caption` 的渲染（`<p className="copy-block__caption">`）。驗收：元件 JSX 不再輸出 caption 元素，程式碼框底部無說明文字。

## 3. 更新 app.css 的 CopyBlock 樣式

- [x] 3.1 更新 `.copy-block` CSS，使容器為 flexbox 單行排列（`display: flex; align-items: center; justify-content: space-between; gap: var(--space-3)`），保留現有的 padding、border、border-radius、background 設定。驗收：程式碼框在各步驟頁面呈現左右對齊的單行版面，無垂直多區塊分割。

- [x] 3.2 移除 `app.css` 中 `.copy-block__header`、`.copy-block__type`、`.copy-block h4` 的 CSS 規則（這些 class 已從元件移除，規則可刪除）。驗收：`app.css` 不再包含上述三個 selector。

- [x] 3.3 移除 `app.css` 中 `.copy-block pre` 的 `border-top` 分隔線與 `padding-top` 設定（單行版面無需上方分隔線）。更新 `pre` 的 margin 使其填滿可用空間（`flex: 1; margin: 0`）。驗收：程式碼框內的 `<pre>` 無頂部分隔線，文字與按鈕垂直置中對齊。

## 4. 將 caption 移至呼叫端渲染

- [x] 4.1 caption 移至呼叫端渲染：在 `GuideStepView.tsx` 中，每個 `CopyBlock` 渲染後，若 `block.caption` 不為空字串，緊接渲染 `<p className="copy-block__caption-external">{block.caption}</p>`。驗收：有 caption 的 copyBlock 在程式碼框下方顯示說明文字；無 caption 的 copyBlock 不渲染任何空白元素。

- [x] 4.2 在 `app.css` 中新增 `.copy-block__caption-external` 的樣式，使用 `--color-text-secondary`、`--text-caption`、`--lh-base`，並加上 `margin-top: var(--space-2)`。驗收：caption 文字在程式碼框下方以次要色、小字呈現，間距與設計系統 hint 文字一致。

## 5. 驗收測試

- [x] 5.1 手動開啟包含 command block 的步驟頁面，確認「Code block renders as single-row inline style」情境符合 spec：程式碼框只顯示指令文字和圖示按鈕，無 type label、無 h4 標題、無框內 caption。

- [x] 5.2 確認有 caption 的 copyBlock 在框外顯示說明文字（「Caption renders outside the code block」情境），以及無 caption 的 copyBlock 不渲染空白區域（「Empty caption produces no extra element」情境）。

- [x] 5.3 點擊複製圖示，確認狀態切換為勾選圖示並於 2.2 秒後自動恢復（複製功能行為不受結構重構影響）。
