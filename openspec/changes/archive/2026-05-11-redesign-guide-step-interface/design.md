## Context

The current guide step page is built from `GuideStepView`, `GuideSidebar`, `CopyBlock`, and shared styles in `src/styles/app.css`. Step data in `src/data/guide.ts` currently uses summary text, checklist items, an optional tip, copy blocks, and a primary image. The desired page is a structured teaching interface with six named regions: progress bar, page check panel, code block, hint block, dropdown block, and navigation buttons.

## Goals / Non-Goals

**Goals:**

- Convert all 11 guide steps to a structured data shape in one pass.
- Render code blocks directly under the instruction that uses them.
- Render hints only under individual instructions.
- Show at most one optional dropdown help block per step when specific content exists.
- Replace the guide step sidebar with a static per-page check panel generated from instruction titles.
- Keep the overview page unchanged.

**Non-Goals:**

- No overview page redesign.
- No persisted progress, localStorage, manual checkboxes, or per-instruction completion state.
- No multiple dropdown blocks per step.
- No deletion of existing image data or assets.
- No new runtime dependency.

## Decisions

### Structured GuideStep data migration

Add `estimatedTime`, `intro`, `instructions`, and optional `dropdown` fields to the guide step data model. Keep `copyBlocks` as a block definition list and use `instruction.codeBlockIds` to attach code blocks to specific instructions.

Rationale: this avoids duplicating copy block content while making the page structure explicit enough for the reference interface.

Mechanical conversion rules:

- Existing `summary` becomes `intro`.
- Existing `checklist` becomes ordered `instructions`.
- Existing `tip` moves to the last instruction as `hint` unless a more specific instruction is obvious during conversion.
- Existing `copyBlocks` are assigned to instructions in their existing order.
- Existing `image` data remains in each step but is not rendered in the redesigned step page.

### Instruction-level code and hint rendering

Render `CopyBlock` instances inside each instruction by resolving `instruction.codeBlockIds` against the step's `copyBlocks`. Render one hint block only when `instruction.hint` exists. Each hint block displays the existing circle-alert icon before the hint text.

Rationale: learners see the command or prompt at the exact point it is needed, and empty hint UI is avoided.

### Single optional dropdown help block

Represent dropdown help as `dropdown?: DropdownBlock` on each step, with title and content. Render no dropdown when the field is absent.

Rationale: this keeps the first version simple and prevents generic help text from appearing just to fill the layout.

### Static per-page check panel

Replace the step-page use of the full chapter sidebar with a check panel generated from current `step.instructions`. The panel lists instruction titles with a circle-check icon for each item and the number of remaining guide steps. It does not provide numeric markers, checkboxes, save state, or step jumping.

Rationale: the panel should help learners verify what this page asks them to do, not serve as global navigation.

### Segmented progress area

Add a progress component that shows current step number, total steps, current short title, chapter label, estimated time, and one segment per guide step. Segments with position less than or equal to the current step number are green.

Rationale: this matches the reference layout and gives immediate lesson progress without adding persistence.

### Completion navigation on final step

Keep Previous and Next for linear navigation after the first step. Hide the Previous action on the first step because no earlier step exists. Previous and Next buttons display chevron-left and chevron-right icons from the existing public icon assets when visible. On the final step, replace the right-side Next action with Complete and route back to the overview page.

Rationale: the lesson has a clear end state while preserving the existing overview route.

## Risks / Trade-offs

- Data migration mistakes can attach a copy block to the wrong instruction. Mitigation: use deterministic assignment by existing order, then verify all copy block IDs referenced by instructions exist in the same step.
- Mechanical conversion can produce rough instructional copy. Mitigation: make this change establish structure and defer manual copy refinement to later changes.
- Removing the visible step image can reduce visual guidance. Mitigation: keep image data and assets intact so a later change can reintroduce instruction-level reference images.
- Replacing the sidebar removes direct jump navigation from the step page. Mitigation: keep previous and next navigation and leave overview page chapter entry points unchanged.

## Migration Plan

1. Add the new guide step types and convert all existing 11 steps to the new structure.
2. Add new presentational components for progress, checks, hints, and dropdown help.
3. Update `GuideStepView` and `App` to render the redesigned step page and final Complete action.
4. Update CSS for the six named regions and responsive behavior.
5. Run the build and manually inspect representative first, middle, and final steps.

## Open Questions

No open questions remain from the discussion. Future refinements can add richer dropdown content, instruction-level images, or persisted completion state as separate changes.
