## 1. 修正進度條 CSS 視覺值

- [x] 1.1 將 `.step-progress__segments` 的 `gap` 從 `var(--space-2)`（8px）改為 `6px`，使 segment 間距符合設計系統規範（`design-system.md` §06 進度條：間距 6px）。驗證：在瀏覽器中觀察進度條，相鄰 segment 之間的間距視覺上明顯窄於修改前的 8px，且與設計稿一致（`src/styles/app.css`）。
- [x] 1.2 將 `.step-progress__segment` 的 `border-radius` 從 `var(--radius-pill)`（9999px）改為 `2px`，使 segment 符合設計系統規範（`design-system.md` §06 進度條：圓角 2px）。驗證：在瀏覽器中觀察進度條，segment 兩端呈微圓角而非完整膠囊形狀，符合「Step page follows the local design system」Requirement（`src/styles/app.css`）。

## 2. 修正當前步驟名稱文字樣式

- [x] 2.1 在 `StepProgress.tsx` 中，將 `stepShortTitle` 用 `<span>` 包裹並加上 `font-weight: var(--fw-semibold)` 與 `color: var(--color-text-primary)` 行內樣式（或對應的 CSS class），使當前步驟名稱在視覺上以 semibold 粗細與主文字色呈現，有別於旁側的次要文字（`--color-text-secondary`），符合 Requirement「Step page follows the local design system」中「current step short title is rendered with font-weight semibold and color matching --color-text-primary」的規範。驗證：在瀏覽器中檢視進度條標題列，stepShortTitle 文字明顯比 `Step X / Total ·` 前綴更粗且顏色更深（`src/components/StepProgress.tsx`）。

## 3. 視覺驗收

- [x] 3.1 啟動開發伺服器，開啟任一步驟頁，目視確認三項修正全部符合：segment 間距 ≈ 6px、segment 圓角微小而非膠囊形、stepShortTitle 為 semibold 深色。確認其他元件（checklist panel、code block、navigation）外觀未受影響，符合「Step page design-system adoption preserves behavior」Requirement 中行為不變的要求。
