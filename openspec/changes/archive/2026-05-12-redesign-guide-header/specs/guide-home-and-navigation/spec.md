## ADDED Requirements

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
