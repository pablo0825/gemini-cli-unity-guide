## MODIFIED Requirements

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

---
### Requirement: Step content preserves the teaching format
The system SHALL preserve the source lesson chapter sequence while allowing a single guide step to merge multiple source slides into one task-oriented explanation. Existing step data SHALL be mechanically converted into the new structure across all 11 steps before manual copy refinement.

#### Scenario: Multiple source slides become one guide step
- **WHEN** adjacent source slides describe the same learner task
- **THEN** the resulting guide step combines them into one explanation without changing the lesson chapter order

#### Scenario: Existing step content is converted
- **WHEN** existing guide steps are migrated to the structured format
- **THEN** summary text becomes intro text, checklist items become ordered instructions, tips become instruction-level hints, and copyable blocks are associated with instructions in their existing order

## ADDED Requirements

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
