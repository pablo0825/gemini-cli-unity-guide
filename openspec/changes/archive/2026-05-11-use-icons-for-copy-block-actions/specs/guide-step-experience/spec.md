## MODIFIED Requirements

### Requirement: Step page supports copyable commands and prompts
The system SHALL render copy actions for every command block and prompt block associated with the current step. Each copy action SHALL be visually represented by an icon-only control and MUST retain an accessible text name that communicates the current action or result state.

#### Scenario: Step includes copyable content
- **WHEN** the current step defines a command block or prompt block
- **THEN** the system shows the block content and a copy action for each block

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
- **WHEN** the current step has no command blocks or prompt blocks
- **THEN** the system does not render an empty copy block container
