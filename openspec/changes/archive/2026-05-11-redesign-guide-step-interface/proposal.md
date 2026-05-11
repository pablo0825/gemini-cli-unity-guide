## Summary

Redesign the guide step page into a structured teaching interface that matches the agreed reference layout: progress bar, per-page check panel, instruction-level code blocks, instruction-level hints, optional dropdown help, and bottom navigation.

## Motivation

The current guide step page mixes lesson text, checklist, image, copy blocks, and navigation into a card-based layout that does not match the desired teaching interface. The new page should make each step easier to follow by presenting the learner's immediate actions in order and by keeping progress and page-level checks visible.

## Proposed Solution

- Restructure guide step data so every step has estimated time, intro text, ordered instructions, instruction-level hint text, instruction-to-code-block associations, and at most one optional dropdown help block.
- Render code blocks directly under the instruction they support instead of in a shared Copy Ready section.
- Render hints only under the instruction they support, with an alert icon to distinguish hint content from normal body text.
- Replace the full chapter sidebar on the guide step page with a per-page check panel generated from the current step instructions.
- Show each per-page check item with a circle-check icon instead of numeric markers.
- Add a full-width segmented progress area that marks completed steps and the current step as green.
- Keep the existing step image data but do not render it on the redesigned guide step page.
- Change the last step's right navigation button to Complete, returning the learner to the overview page.
- Show chevron icons in the previous and next navigation buttons using existing public icon assets.
- Hide the Previous navigation action on the first guide step instead of showing a disabled control.
- Mechanically convert all 11 existing steps to the new structure first, with later copy refinement handled separately.

## Non-Goals

- Do not redesign the overview page or home navigation page.
- Do not add interactive checkboxes, persisted completion state, or localStorage progress tracking.
- Do not support multiple dropdown help blocks per step in this change.
- Do not delete existing step image data or image assets.
- Do not add a direct jump-to-any-step sidebar in the redesigned step page.
- Do not introduce new runtime dependencies.

## Alternatives Considered

- CSS-only restyling was rejected because code blocks, hints, dropdown help, and page checks need explicit structure in the data model.
- Redesigning only one representative step was rejected because it would leave mixed old and new step experiences.
- Creating default dropdown help for every step was rejected because generic help text would reduce teaching quality.

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `guide-step-experience`: the guide step page changes from text/image/copy sections to a structured teaching interface with progress, instructions, per-page checks, instruction-level code and hints, optional dropdown help, and completion navigation.

## Impact

- Affected specs: guide-step-experience
- Affected code:
  - New: src/components/StepProgress.tsx
  - New: src/components/StepChecklistPanel.tsx
  - New: src/components/DisclosureBlock.tsx
  - New: src/components/HintBlock.tsx
  - Modified: src/data/guide.ts
  - Modified: src/App.tsx
  - Modified: src/components/GuideStepView.tsx
  - Modified: src/components/GuideSidebar.tsx
  - Modified: src/components/CopyBlock.tsx
  - Modified: src/styles/app.css
  - Reused: public/icons/chevron-left.svg
  - Reused: public/icons/chevron-right.svg
  - Reused: public/icons/circle-check.svg
  - Reused: public/icons/circle-alert.svg
  - Removed: none
- Dependencies: none
