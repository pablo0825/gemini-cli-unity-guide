## Why

進度條元件（`StepProgress`）目前有三處與設計系統規範（`design-system.md` §06）不符：segment 間距、圓角值、以及當前步驟名稱的文字樣式。這些偏差導致視覺呈現與設計規格不一致，需要對齊以維持設計系統的完整性。

## What Changes

- **Segment 間距**：`gap` 從 `var(--space-2)`（8px）改為 6px（規範值，無對應 token）
- **Segment 圓角**：`border-radius` 從 `var(--radius-pill)`（9999px）改為 2px（規範值，無對應 token）
- **當前步驟名稱樣式**：`stepShortTitle` 加上 `font-weight: var(--fw-semibold)` 與 `color: var(--color-text-primary)` 強調樣式

## Non-Goals

- 不修改進度條以外的任何元件
- 不新增設計系統 token（6px、2px 直接以硬值寫入，待設計系統版本更新時再統一）
- 不更改進度條的資料結構或 props

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `guide-step-experience`：進度條視覺規格對齊設計系統（segment 間距、圓角、步驟名稱文字樣式）

## Impact

- Affected specs: `guide-step-experience`
- Affected code:
  - Modified: `src/styles/app.css`
  - Modified: `src/components/StepProgress.tsx`
