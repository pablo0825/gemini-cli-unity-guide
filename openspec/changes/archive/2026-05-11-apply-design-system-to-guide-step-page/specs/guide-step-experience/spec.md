## ADDED Requirements

### Requirement: Step page follows the local design system
The system SHALL expose the design-system.md CSS tokens globally and SHALL apply those tokens to the guide step page visual presentation. The guide step page MUST keep its existing step content, route behavior, and interaction behavior unchanged while adopting design-system.md colors, typography, spacing, radii, elevation, and motion for the guide step page regions.

#### Scenario: Design tokens are available globally
- **WHEN** the application stylesheet is loaded
- **THEN** the design-system.md token names are available from the root stylesheet scope for colors, typography, spacing, radii, elevation, motion, progress, and step states

#### Scenario: Guide step page uses design system visual rules
- **WHEN** a guide step is active
- **THEN** the progress area, instruction list, per-page check panel, code blocks, hint blocks, dropdown block, and navigation buttons use design-system.md tokenized visual rules

#### Scenario: Overview page remains out of visual scope
- **WHEN** the overview page is shown
- **THEN** the change does not redesign the overview page layout, overview page content hierarchy, or overview page navigation behavior

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
