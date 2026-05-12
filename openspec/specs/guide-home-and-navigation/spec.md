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

---
### Requirement: Guide header displays guide title and current chapter context
The system SHALL render a persistent header in guide mode containing a star icon on the left alongside the guide title, and the current chapter label on the right. The star icon SHALL be an outline SVG (24×24, stroke-width 1.8) rendered in the muted text color (`--color-text-muted`). The guide title SHALL use semibold weight (`--fw-semibold`) and the primary text color (`--color-text-primary`). The chapter label SHALL display the chapter eyebrow and chapter title separated by a middle dot and SHALL use caption size (`--text-caption`) and secondary text color (`--color-text-secondary`). Clicking the star icon or the guide title SHALL return the learner to the overview page.

#### Scenario: Learner views the guide header during a step
- **WHEN** a guide step is active
- **THEN** the header shows the outline star icon and guide title on the left, and the current chapter eyebrow and chapter title on the right

#### Scenario: Chapter label updates when the learner changes chapters
- **WHEN** the learner navigates to a step in a different chapter
- **THEN** the right side of the header shows the new chapter's eyebrow and title

#### Scenario: Clicking the header title returns to the overview
- **WHEN** the learner clicks the star icon or guide title in the guide header
- **THEN** the system navigates to the overview page

#### Scenario: Guide header does not show a standalone back button
- **WHEN** a guide step is active
- **THEN** the header does not render a separate "回首頁" text button; the return-to-overview action is only available through the star icon and guide title

<!-- @trace
source: redesign-guide-header
updated: 2026-05-12
code:
  - src/components/GuideStepView.tsx
  - src/components/StepProgress.tsx
  - public/icons/star.svg
  - src/styles/app.css
  - src/App.tsx
  - src/data/guide.ts
-->