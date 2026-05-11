## 1. Data model and migration

- [x] 1.1 Implement Structured GuideStep data migration in src/data/guide.ts by adding estimatedTime, intro, instructions, optional dropdown, and instruction codeBlockIds while preserving existing image data for all 11 steps and supporting the Step page exposes structured instruction support requirement.
- [x] 1.2 Verify Step content preserves the teaching format by mechanically converting summary to intro, checklist items to ordered instructions, tips to instruction-level hints, and copyBlocks to instruction references in existing order.
- [x] 1.3 Add validation-friendly data access in src/data/guide.ts so every instruction codeBlockIds entry resolves to a copyBlocks item within the same step.

## 2. Step page components

- [x] 2.1 Implement Segmented progress area by adding src/components/StepProgress.tsx and rendering current step metadata, chapter label, estimated time, and green completed/current segments for the Step page shows progress and page checks requirement.
- [x] 2.2 Implement Static per-page check panel by adding src/components/StepChecklistPanel.tsx that lists only current step instruction titles and remaining guide step count without checkboxes or persisted state for the Step page shows progress and page checks requirement.
- [x] 2.3 Implement Instruction-level code and hint rendering by adding src/components/HintBlock.tsx and updating src/components/GuideStepView.tsx to render intro, ordered instructions, referenced CopyBlock instances, and one hint per instruction.
- [x] 2.4 Implement Single optional dropdown help block by adding src/components/DisclosureBlock.tsx and rendering it only when the current step defines dropdown content.

## 3. Navigation and layout integration

- [x] 3.1 Update src/App.tsx and src/components/GuideStepView.tsx so Step page supports linear completion navigation and the Completion navigation on final step design decision with Complete returning to the overview page.
- [x] 3.2 Replace the step-page use of src/components/GuideSidebar.tsx with the redesigned per-page check panel while keeping the overview page behavior unchanged.
- [x] 3.3 Update src/components/CopyBlock.tsx only as needed so Step page supports copyable commands and prompts under individual instructions without reintroducing a shared Copy Ready section.

## 4. Styling and verification

- [x] 4.1 Update src/styles/app.css for the redesigned guide step interface regions: progress bar, left instruction content, right check panel, code blocks, hint blocks, dropdown block, and navigation buttons.
- [x] 4.2 Verify Step page presents one focused task by checking first, middle, and final steps render the redesigned structure without the primary image region and without an empty copy block or dropdown region.
- [x] 4.3 Run the project build and confirm no new runtime dependencies were added.
- [x] 4.4 Update src/components/GuideStepView.tsx and src/styles/app.css so Step page supports linear completion navigation with public/icons/chevron-left.svg and public/icons/chevron-right.svg in the Previous and Next buttons.
- [x] 4.5 Run the project build and verify the navigation icon update adds no new runtime dependencies.
- [x] 4.6 Update src/components/StepChecklistPanel.tsx and src/styles/app.css so the Step page shows progress and page checks panel uses public/icons/circle-check.svg instead of numeric markers for each current-page check item.
- [x] 4.7 Run the project build and verify the check panel icon update adds no new runtime dependencies.
- [x] 4.8 Update src/components/HintBlock.tsx and src/styles/app.css so Instruction-level code and hint rendering uses public/icons/circle-alert.svg inside each hint block.
- [x] 4.9 Run the project build and verify the hint icon update adds no new runtime dependencies.
- [x] 4.10 Update src/components/GuideStepView.tsx so Step page supports linear completion navigation by hiding the Previous action on the first guide step instead of rendering it disabled.
- [x] 4.11 Run the project build and verify the first-step Previous action update adds no new runtime dependencies.
