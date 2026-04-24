## 1. 專案骨架

- [x] 1.1 Apply Use Vite + React single-page guide shell by initializing the Vite React app, TypeScript config, and base build scripts.
- [x] 1.2 Apply Store the lesson as typed chapter-and-step data by defining the chapter, step, image, and copy-block schema in src/data/guide.ts.

## 2. 教學內容整理

- [x] 2.1 Implement Step content preserves the teaching format and Preserve PPT chapter order but merge slides into task-oriented steps by converting the PDF/PPT lesson into ordered chapter and step seed data.
- [x] 2.2 Populate the initial image references, alt text, and copyable command or prompt blocks for each seeded step.

## 3. 首頁與導覽

- [x] 3.1 Implement Overview page introduces the lesson by building the home view with lesson summary, target audience, prerequisites, learning outcomes, and a start action.
- [x] 3.2 Implement Learner can move through ordered steps and Provide overview navigation and linear navigation together with chapter entry points, step index, and Previous / Next controls.
- [x] 3.3 Implement Current progress is visible and recoverable by syncing the active chapter and step to a reload-safe URL or equivalent restorable navigation state.

## 4. 步驟閱讀體驗

- [x] 4.1 Implement Step page presents one focused task and Render each step as one focused task with one hero image and copy blocks in the guide reading layout.
- [x] 4.2 Implement Step page supports copyable commands and prompts with reusable copy actions and visible success feedback for command and prompt blocks.
- [x] 4.3 Verify the first-pass guide flow against the design risks by checking linear navigation, direct step jumps, single-image steps, and empty copy-block behavior.
