# guide-step-experience Specification

## Purpose

TBD - created by archiving change 'add-gemini-cli-unity-guide-site'. Update Purpose after archive.

## Requirements

### Requirement: Step page presents one focused task
The system SHALL present each guide step as one focused learning task with Chinese instructional content and exactly one primary image.

#### Scenario: Learner opens a guide step
- **WHEN** a step becomes active
- **THEN** the system shows the step title, Chinese instructional text, and one primary reference image for that step

#### Scenario: Step does not require image carousel interaction
- **WHEN** a step is active
- **THEN** the learner can complete that step without switching between multiple images inside the same step

---
### Requirement: Step page supports copyable commands and prompts
The system SHALL render copy actions for every command block and prompt block associated with the current step.

#### Scenario: Step includes copyable content
- **WHEN** the current step defines a command block or prompt block
- **THEN** the system shows the block content and a copy action for each block

##### Example: command and prompt blocks
| Block type | Content | Expected action |
| ---------- | ------- | --------------- |
| command | npm install -g @google/gemini-cli | Copy button copies the full command |
| prompt | Build a 2D shooter prototype in Unity. | Copy button copies the full prompt |

#### Scenario: Step has no copyable content
- **WHEN** the current step has no command blocks or prompt blocks
- **THEN** the system does not render an empty copy block container

---
### Requirement: Step content preserves the teaching format
The system SHALL preserve the source lesson chapter sequence while allowing a single guide step to merge multiple source slides into one task-oriented explanation.

#### Scenario: Multiple source slides become one guide step
- **WHEN** adjacent source slides describe the same learner task
- **THEN** the resulting guide step combines them into one explanation without changing the lesson chapter order
