## Summary

Apply the local design system to the guide step page at a medium level of visual convergence: define global design tokens from design-system.md, then use those tokens only on the guide step page components in this change.

## Motivation

The guide step page now has the right teaching structure, but its visual language still uses older heavy cards, large rounded corners, strong borders, and custom colors. Applying design-system.md will make the walkthrough feel more consistent, calmer, and easier to extend while keeping visual risk limited to the step page.

## Proposed Solution

- Add the design-system.md CSS tokens to the global root so future pages can reuse the same foundations.
- Update only the guide step page styles to consume the new tokens for color, type, spacing, radius, elevation, and motion.
- Medium-converge the existing guide step regions to the design system without changing page information architecture.
- Align these guide step page regions with the design system component guidance: page header, progress bar, step item, code block, callout, step index, accordion, and buttons.
- Keep current guide step behavior unchanged: copy actions, hint rendering, dropdown behavior, progress calculation, first-step Previous hiding, final Complete action, and route behavior.

## Non-Goals

- Do not redesign the overview page or home navigation page in this change.
- Do not change guide data shape, lesson copy, chapter sequence, or route behavior.
- Do not add a UI library, CSS framework, or runtime dependency.
- Do not replace existing SVG icons or introduce new assets unless a missing state cannot use an existing icon.
- Do not perform a high-level layout redesign beyond medium visual convergence to design-system.md.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `guide-step-experience`: the guide step page visual presentation changes to use design-system.md tokens and component guidance while keeping existing step page behavior and structure.

## Impact

- Affected specs: guide-step-experience
- Affected code:
  - Modified: src/styles/app.css
  - Modified: src/components/GuideStepView.tsx
  - Modified: src/components/StepProgress.tsx
  - Modified: src/components/StepChecklistPanel.tsx
  - Modified: src/components/CopyBlock.tsx
  - Modified: src/components/HintBlock.tsx
  - Modified: src/components/DisclosureBlock.tsx
  - Modified: design-system.md
  - Removed: none
- Dependencies: none
