## MODIFIED Requirements

### Requirement: Step page follows the local design system
The system SHALL expose the design-system.md CSS tokens globally and SHALL apply those tokens to the guide step page visual presentation. The guide step page MUST keep its existing step content, route behavior, and interaction behavior unchanged while adopting design-system.md colors, typography, spacing, radii, elevation, and motion for the guide step page regions.

A command block or prompt block SHALL be rendered as a single-row inline code container: code text on the left and a copy icon button on the right. The container SHALL NOT include a type label, an h4 label heading, or caption text inside the container. If a block defines a caption, the caption SHALL be rendered outside and below the container by the calling component.

#### Scenario: Design tokens are available globally
- **WHEN** the application stylesheet is loaded
- **THEN** the design-system.md token names are available from the root stylesheet scope for colors, typography, spacing, radii, elevation, motion, progress, and step states

#### Scenario: Guide step page uses design system visual rules
- **WHEN** a guide step is active
- **THEN** the progress area, instruction list, per-page check panel, code blocks, hint blocks, dropdown block, and navigation buttons use design-system.md tokenized visual rules

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
