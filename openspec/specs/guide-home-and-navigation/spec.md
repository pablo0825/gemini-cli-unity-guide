# guide-home-and-navigation Specification

## Purpose

TBD - created by archiving change 'add-gemini-cli-unity-guide-site'. Update Purpose after archive.

## Requirements

### Requirement: Overview page introduces the lesson
The system SHALL provide an overview page that summarizes the lesson purpose, intended audience, prerequisites, and chapter entry points before the learner enters the step flow.

#### Scenario: Learner lands on the overview page
- **WHEN** the learner opens the site root
- **THEN** the system shows the lesson title, expected learning outcome, intended audience, prerequisites, and an action to begin the guide

#### Scenario: Overview page exposes chapter entry points
- **WHEN** the learner reviews the overview page
- **THEN** the system shows the ordered lesson chapters and allows the learner to enter the guide from the first step or jump to a chapter starting step

---
### Requirement: Learner can move through ordered steps
The system SHALL provide linear and direct navigation across the merged task-oriented steps while preserving the original chapter order from the source lesson.

#### Scenario: Linear navigation advances to the next step
- **WHEN** the learner activates Next on a non-final step
- **THEN** the system moves to the immediately following step and updates the visible chapter and step progress

#### Scenario: Linear navigation returns to the previous step
- **WHEN** the learner activates Previous on a non-first step
- **THEN** the system moves to the immediately preceding step and updates the visible chapter and step progress

#### Scenario: Direct navigation jumps to a chosen step
- **WHEN** the learner selects a chapter or step entry from the step index
- **THEN** the system opens that step without requiring repeated Previous or Next actions

---
### Requirement: Current progress is visible and recoverable
The system SHALL show the learner which chapter and step are currently open, and the current location MUST be recoverable after a page refresh or direct link open.

#### Scenario: Current position is visible
- **WHEN** a guide step is open
- **THEN** the system shows the current chapter label and step position within the lesson

#### Scenario: Current position survives reload
- **WHEN** the learner refreshes or reopens a direct link to a specific step
- **THEN** the system restores that same step as the active view
