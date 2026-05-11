## Context

The guide step page already has the desired teaching structure from the previous step-interface redesign: segmented progress, instruction list, per-page check panel, copyable code blocks, hint callouts, optional dropdown help, and bottom navigation. The project now also has design-system.md, which defines color, typography, spacing, radius, elevation, motion, and component guidance for a calmer walkthrough style.

The current styling still mixes older visual choices with the new structure: heavier borders, large radii, strong shadows, and component-specific color values. This change establishes the design system foundations globally while limiting visible changes to the guide step page.

## Goals / Non-Goals

**Goals:**

- Add design-system.md CSS tokens to the global root so future pages can opt into the same system.
- Medium-converge the guide step page to the design system while preserving its current information architecture.
- Apply the design system component guidance to progress, step index, step item, code block, callout, accordion, page header, and buttons on the guide step page.
- Keep the overview page visually unchanged except for any unavoidable inherited browser-level token definitions that do not alter applied classes.
- Keep all guide step interactions and route behavior unchanged.

**Non-Goals:**

- No overview page redesign.
- No guide content, chapter sequence, or data model changes.
- No new runtime dependencies, CSS framework, or UI component library.
- No high-level layout redesign of the guide step page.
- No replacement of existing icon assets.

## Decisions

### Global design tokens with scoped adoption

Add the design-system.md tokens to `:root`, but only refactor guide step page selectors to consume them in this change.

Rationale: this makes the design system available for later pages without forcing a full-site visual migration now. The overview page keeps its current class rules and therefore remains out of visual scope.

Alternative considered: replace all existing root variables and restyle the whole site at once. This was rejected because it would make the overview page part of the blast radius and make regressions harder to isolate.

### Medium convergence for guide step visual presentation

Keep the current guide step layout and component hierarchy, but align visible styling to design-system.md: calmer surface colors, 4px spacing scale, smaller radii, softer shadows, tokenized typography, and component-specific tokens for progress, callout, code, accordion, step index, and buttons.

Rationale: the current layout already matches the teaching workflow. The value is visual consistency, not another structural redesign.

Alternative considered: high convergence with layout and component hierarchy changes. This was rejected because the recently archived step interface already established the page structure.

### Preserve guide step behavior and content contracts

Do not change step data, navigation state, copy state, dropdown open behavior, hint rendering rules, progress calculation, check panel item generation, or final completion routing.

Rationale: this change is visual. Keeping behavior stable allows implementation to focus on style correctness and build verification.

Alternative considered: combine visual convergence with interaction changes. This was rejected because it would blur review scope.

## Implementation Contract

The guide step page SHALL keep the same visible regions and user actions as before: progress area, instruction list, per-page check panel, copy blocks, hint callouts, optional dropdown, and navigation buttons. The page SHALL use design-system.md tokens for its visual presentation after this change.

The global stylesheet SHALL expose the design-system.md token names in `:root`, including color, text, line-height, font weight, spacing, radius, shadow, motion, progress, and step-state tokens. Existing project variables MAY remain as compatibility aliases, but guide step page selectors SHALL prefer the design-system.md token names.

The guide step page visual acceptance criteria are:

- Progress uses the design system progress track and fill tokens.
- Per-page check panel uses the design system step-index surface, radius, text, and icon color guidance.
- Instruction rows use the design system step-item spacing, marker sizing, and text scale guidance.
- Copy blocks use the design system code block surface, border, radius, mono font, and copy action guidance.
- Hint blocks use the design system callout pattern and existing circle-alert icon.
- Dropdown help uses the design system accordion surface, border, radius, padding, and text guidance.
- Navigation buttons use the design system button sizing, radius, hover, active, and disabled guidance while preserving existing chevron icons.
- The first guide step still hides Previous, middle steps show Previous and Next, and the final step shows Previous and Complete.
- The overview page route and overview page component are not redesigned in this change.

Verification SHALL include a production build and representative visual inspection of the first, middle, and final guide steps. The build verification SHALL confirm no package dependency files changed.

## Risks / Trade-offs

- Global tokens can accidentally affect non-step pages if existing selectors are rewritten too broadly. Mitigation: keep overview selectors on their current declarations and scope new token adoption to guide step page classes.
- Medium convergence can leave small differences from design-system.md. Mitigation: explicitly align the named guide step regions to the relevant component guidance while avoiding high-level layout churn.
- Existing mojibake in source text can tempt unrelated copy edits. Mitigation: do not edit lesson copy or overview copy in this change.

## Migration Plan

1. Add the design-system.md token block to `:root` while preserving existing compatibility variables needed by current styles.
2. Update guide step page styles to consume the new tokens region by region.
3. Make minimal component class adjustments only if selectors cannot target the correct region safely.
4. Run the production build and confirm package dependency files are unchanged.
5. Inspect first, middle, and final guide steps for layout, visual, and navigation regressions.

## Open Questions

No open questions remain. The agreed visual scope is medium convergence, with global tokens added and visible adoption limited to the guide step page.
