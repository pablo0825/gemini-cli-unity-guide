# guide-step-experience Specification

## Purpose

TBD - created by archiving change 'add-gemini-cli-unity-guide-site'. Update Purpose after archive.

## Requirements

### Requirement: Step page presents one focused task
The system SHALL present each guide step as one focused learning task with Chinese instructional content, ordered instruction blocks, a segmented lesson progress area, a per-page check panel, optional dropdown help, and bottom navigation. The step page MUST NOT require a primary reference image to be visible in the redesigned step view.

#### Scenario: Learner opens a guide step
- **WHEN** a step becomes active
- **THEN** the system shows the step title, Chinese instructional text, ordered instructions, lesson progress, per-page checks, and navigation controls for that step

#### Scenario: Step does not require image carousel interaction
- **WHEN** a step is active
- **THEN** the learner can complete that step without switching between multiple images inside the same step

#### Scenario: Step image data remains non-blocking
- **WHEN** a step has image metadata
- **THEN** the redesigned step page allows the learner to complete the step without rendering the image as a required page region


<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step page supports copyable commands and prompts
The system SHALL render copy actions for every command block and prompt block associated with the current step. Each copy action SHALL be visually represented by an icon-only control and MUST retain an accessible text name that communicates the current action or result state. Copyable blocks SHALL appear under the ordered instruction that references them.

#### Scenario: Step includes copyable content
- **WHEN** the current step defines a command block or prompt block referenced by an instruction
- **THEN** the system shows the block content and a copy action under that instruction

##### Example: command and prompt blocks
| Block type | Content | Expected action |
| ---------- | ------- | --------------- |
| command | npm install -g @google/gemini-cli | Copy button copies the full command |
| prompt | Build a 2D shooter prototype in Unity. | Copy button copies the full prompt |

#### Scenario: Copy action is icon-only and accessible
- **WHEN** a command block or prompt block is shown
- **THEN** the copy action is displayed as an icon-only control with an accessible text name for assistive technologies

#### Scenario: Copy action reports success state
- **WHEN** the learner activates a copy action and the clipboard write succeeds
- **THEN** the action displays the success icon and exposes success text through its accessible name until the status resets

#### Scenario: Step has no copyable content
- **WHEN** the current step has no command blocks or prompt blocks referenced by instructions
- **THEN** the system does not render an empty copy block container


<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step content preserves the teaching format
The system SHALL preserve the source lesson chapter sequence while allowing a single guide step to merge multiple source slides into one task-oriented explanation. Existing step data SHALL be mechanically converted into the new structure across all 11 steps before manual copy refinement.

#### Scenario: Multiple source slides become one guide step
- **WHEN** adjacent source slides describe the same learner task
- **THEN** the resulting guide step combines them into one explanation without changing the lesson chapter order

#### Scenario: Existing step content is converted
- **WHEN** existing guide steps are migrated to the structured format
- **THEN** summary text becomes intro text, checklist items become ordered instructions, tips become instruction-level hints, and copyable blocks are associated with instructions in their existing order


<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step page exposes structured instruction support
The system SHALL structure each guide step as intro text followed by ordered instruction blocks. Each instruction block SHALL have a title and SHALL support optional body text, zero or more copyable block references, and one optional hint block. Each step SHALL support at most one optional dropdown help block when specific help content exists.

#### Scenario: Step has ordered instructions
- **WHEN** a guide step is rendered
- **THEN** the system shows each instruction in the order defined by the step data and labels each instruction with its numeric position in the step

#### Scenario: Instruction has a hint
- **WHEN** an instruction defines hint text
- **THEN** the system shows one hint block with a circle-alert icon under that instruction

#### Scenario: Instruction has no hint
- **WHEN** an instruction does not define hint text
- **THEN** the system does not render an empty hint block for that instruction

#### Scenario: Step has dropdown help
- **WHEN** a step defines one dropdown help block with specific content
- **THEN** the system shows a collapsible help block for that step

#### Scenario: Step has no dropdown help
- **WHEN** a step does not define dropdown help
- **THEN** the system does not render an empty dropdown help block


<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step page shows progress and page checks
The system SHALL show a full-width progress area for the active guide step and a per-page check panel generated from the active step instructions. The progress area SHALL mark completed steps and the current step as complete segments. The check panel SHALL list only the current page instructions and MUST NOT provide manual checkboxes or persisted completion state.

#### Scenario: Learner views lesson progress
- **WHEN** the learner opens step 3 of 11
- **THEN** the progress area marks segments 1, 2, and 3 as complete and leaves segments 4 through 11 incomplete

#### Scenario: Learner views current page checks
- **WHEN** a step contains three instruction blocks
- **THEN** the check panel lists those three instruction titles and shows a circle-check icon for each item

#### Scenario: Check panel remains static
- **WHEN** the learner views the check panel
- **THEN** the panel does not show manual checkboxes and does not save per-instruction completion state


<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step page supports linear completion navigation
The system SHALL keep previous and next navigation for guide steps. Previous and Next navigation actions SHALL include directional chevron icons. On the final guide step, the right navigation action SHALL become a Complete action that returns the learner to the overview page.

#### Scenario: Learner moves to the next step
- **WHEN** the learner activates Next on a non-final step
- **THEN** the system opens the immediately following step

#### Scenario: Learner sees directional navigation icons
- **WHEN** Previous or Next navigation is visible
- **THEN** the visible navigation label includes the matching directional chevron icon

#### Scenario: Learner completes the final step
- **WHEN** the learner activates Complete on the final step
- **THEN** the system returns to the overview page

#### Scenario: Learner is on the first step
- **WHEN** the first guide step is active
- **THEN** the Previous action is not rendered

<!-- @trace
source: redesign-guide-step-interface
updated: 2026-05-11
code:
  - public/icons/check.svg
  - public/icons/circle-check.svg
  - src/components/DisclosureBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - src/components/StepProgress.tsx
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/data/guide.ts
  - public/icons/copy.svg
  - src/components/HintBlock.tsx
  - src/styles/app.css
  - src/components/CopyBlock.tsx
  - public/icons/chevron-right.svg
  - public/icons/circle-alert.svg
  - public/icons/chevron-left.svg
-->

---
### Requirement: Step page follows the local design system
The system SHALL expose the design-system.md CSS tokens globally and SHALL apply those tokens to the guide step page visual presentation. The guide step page MUST keep its existing step content, route behavior, and interaction behavior unchanged while adopting design-system.md colors, typography, spacing, radii, elevation, and motion for the guide step page regions.

A command block or prompt block SHALL be rendered as a single-row inline code container: code text on the left and a copy icon button on the right. The container SHALL NOT include a type label, an h4 label heading, or caption text inside the container. If a block defines a caption, the caption SHALL be rendered outside and below the container by the calling component.

The step progress bar segments SHALL conform to the design-system.md progress-bar specification: each segment SHALL have a height of 4px, a border-radius of 2px, and a gap of 6px between segments. The current step short title SHALL be rendered with font-weight semibold (`--fw-semibold`) and color `--color-text-primary` to distinguish it from secondary metadata text.

#### Scenario: Design tokens are available globally
- **WHEN** the application stylesheet is loaded
- **THEN** the design-system.md token names are available from the root stylesheet scope for colors, typography, spacing, radii, elevation, motion, progress, and step states

#### Scenario: Guide step page uses design system visual rules
- **WHEN** a guide step is active
- **THEN** the progress area, instruction list, per-page check panel, code blocks, hint blocks, dropdown block, and navigation buttons use design-system.md tokenized visual rules

#### Scenario: Progress bar segments match design-system specification
- **WHEN** the progress bar is rendered
- **THEN** each segment has a height of 4px, a border-radius of 2px, and adjacent segments are separated by a 6px gap

#### Scenario: Current step short title is visually emphasized
- **WHEN** the progress bar is rendered
- **THEN** the current step short title is displayed with font-weight semibold and color matching --color-text-primary, distinct from the secondary metadata text color used elsewhere in the progress area

#### Scenario: Code block renders as single-row inline style
- **WHEN** a command block or prompt block is shown
- **THEN** the system renders a single-row container with the code text on the left and the copy icon button on the right, with no type label, no heading, and no caption inside the container

#### Scenario: Caption renders outside the code block
- **WHEN** a command block or prompt block defines a non-empty caption
- **THEN** the calling component renders the caption text below and outside the code container

#### Scenario: Empty caption produces no extra element
- **WHEN** a command block or prompt block has an empty caption
- **THEN** the calling component does not render an empty caption region below the code container

#### Scenario: Overview page remains out of visual scope
- **WHEN** the overview page is shown
- **THEN** the change does not redesign the overview page layout, overview page content hierarchy, or overview page navigation behavior


<!-- @trace
source: align-progress-bar-design-system
updated: 2026-05-12
code:
  - src/styles/app.css
  - src/components/StepProgress.tsx
  - src/data/guide.ts
  - src/components/GuideStepView.tsx
-->

---
### Requirement: Step page design-system adoption preserves behavior
The system SHALL preserve existing guide step behavior while changing visual styling. Copy actions, hint rendering, dropdown rendering, per-page check generation, progress segment calculation, first-step Previous hiding, and final-step Complete navigation SHALL behave as they did before this visual adoption.

#### Scenario: First step navigation remains stable
- **WHEN** the first guide step is active
- **THEN** the Previous action is not rendered and the Next action opens the immediately following step

#### Scenario: Middle step navigation remains stable
- **WHEN** a non-first and non-final guide step is active
- **THEN** the Previous and Next actions remain visible and open the immediately adjacent guide steps

#### Scenario: Final step completion remains stable
- **WHEN** the final guide step is active
- **THEN** the Previous action remains visible and the Complete action returns the learner to the overview page

#### Scenario: Copy and disclosure interactions remain stable
- **WHEN** a guide step contains copyable blocks, hint text, or dropdown help
- **THEN** the copy action, hint block rendering, and dropdown behavior remain available under the same instruction-level conditions

<!-- @trace
source: apply-design-system-to-guide-step-page
updated: 2026-05-11
code:
  - .agents/skills/spectra-apply/SKILL.md
  - .agents/skills/spectra-drift/SKILL.md
  - src/components/HintBlock.tsx
  - src/components/StepChecklistPanel.tsx
  - public/icons/circle-check.svg
  - .agents/skills/spectra-propose/SKILL.md
  - public/icons/chevron-right.svg
  - src/components/DisclosureBlock.tsx
  - .agents/skills/spectra-discuss/SKILL.md
  - public/icons/chevron-left.svg
  - public/icons/circle-alert.svg
  - public/icons/copy.svg
  - src/data/guide.ts
  - design-system.md
  - .agents/skills/spectra-ingest/SKILL.md
  - public/icons/check.svg
  - src/styles/app.css
  - src/App.tsx
  - src/components/GuideStepView.tsx
  - src/components/StepProgress.tsx
  - src/components/CopyBlock.tsx
-->