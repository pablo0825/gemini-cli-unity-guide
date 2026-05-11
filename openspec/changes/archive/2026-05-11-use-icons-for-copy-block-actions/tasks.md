## 1. CopyBlock icon action

- [x] 1.1 Update src/components/CopyBlock.tsx so the Step page supports copyable commands and prompts requirement uses public/icons/copy.svg for idle and failed states, and public/icons/check.svg for copied state.
- [x] 1.2 Add an accessible text name to the icon-only copy action that reflects idle, copied, and failed states without showing the old visible button text.

## 2. Styling and verification

- [x] 2.1 Update src/styles/app.css so the icon-only copy button has stable dimensions, aligned icon rendering, and existing hover and focus behavior on desktop and mobile.
- [x] 2.2 Run the project build and verify the CopyBlock button still copies content, shows the success icon after a successful copy, and does not introduce new dependencies.
