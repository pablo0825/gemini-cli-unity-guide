## 1. Design token foundation

- [x] 1.1 Deliver the Global design tokens with scoped adoption contract by adding design-system.md root tokens while preserving current compatibility variables in src/styles/app.css; verify by reviewing the root stylesheet contains the design-system.md token names and existing overview selectors are not rewritten for this change.
- [x] 1.2 Deliver the Step page follows the local design system token availability requirement by confirming the production build resolves the added root tokens without CSS syntax errors; verify with npm.cmd run build.

## 2. Guide step visual convergence

- [x] 2.1 Deliver Medium convergence for guide step visual presentation for the page shell, page header, instruction rows, and bottom navigation in src/styles/app.css while preserving the current guide step layout hierarchy; verify by manual inspection of first, middle, and final guide steps and by confirming no guide data files changed.
- [x] 2.2 Deliver Medium convergence for guide step visual presentation for StepProgress and StepChecklistPanel so progress and page checks use design-system.md progress and step-index guidance; verify by checking step 3 of 11 still marks segments 1 through 3 complete and the check panel still lists only current-step instruction titles.
- [x] 2.3 Deliver Medium convergence for guide step visual presentation for CopyBlock, HintBlock, and DisclosureBlock so code, callout, and accordion regions use design-system.md guidance while keeping existing icons and conditions; verify by inspecting a step with copyable content, a step with hint text, and a step with dropdown help.

## 3. Behavior preservation and verification

- [x] 3.1 Deliver the Step page design-system adoption preserves behavior requirement for navigation by confirming the first step hides Previous, a middle step shows Previous and Next, and the final step shows Previous and Complete; verify through manual route checks in the running app or equivalent DOM inspection.
- [x] 3.2 Deliver the Preserve guide step behavior and content contracts design decision and the Step page design-system adoption preserves behavior requirement for copy, hint, dropdown, progress, and check panel interactions by confirming no component logic or guide data model changes are needed beyond minimal class adjustments; verify through code review of src/components/GuideStepView.tsx, src/components/StepProgress.tsx, src/components/StepChecklistPanel.tsx, src/components/CopyBlock.tsx, src/components/HintBlock.tsx, and src/components/DisclosureBlock.tsx.
- [x] 3.3 Verify the complete change by running npm.cmd run build and confirming package.json and package-lock.json have no diff, proving the visual adoption adds no runtime dependency.
