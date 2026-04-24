<!-- SPECTRA:START v1.0.2 -->

# Spectra Instructions

This project uses Spectra for Spec-Driven Development(SDD). Specs live in `openspec/specs/`, change proposals in `openspec/changes/`.

## Use `$spectra-*` skills when:

- A discussion needs structure before coding → `$spectra-discuss`
- User wants to plan, propose, or design a change → `$spectra-propose`
- Tasks are ready to implement → `$spectra-apply`
- There's an in-progress change to continue → `$spectra-ingest`
- User asks about specs or how something works → `$spectra-ask`
- Implementation is done → `$spectra-archive`
- Commit only files related to a specific change → `$spectra-commit`

## Workflow

discuss? → propose → apply ⇄ ingest → archive

- `discuss` is optional — skip if requirements are clear
- Requirements change mid-work? `ingest` → resume `apply`

## Parked Changes

Changes can be parked（暫存）— temporarily moved out of `openspec/changes/`. Parked changes won't appear in `spectra list` but can be found with `spectra list --parked`. To restore: `spectra unpark <name>`. The `$spectra-apply` and `$spectra-ingest` skills handle parked changes automatically.

<!-- SPECTRA:END -->

## Commit Message Format

When creating commits, use Conventional Commits.

Allowed prefixes:

- `feat:`
- `fix:`
- `refactor:`
- `test:`
- `docs:`

Use the prefix that best matches the primary purpose of the commit.
Write the commit message body in Traditional Chinese after the prefix.

## Collaboration Guidelines

When requirements are unclear or the task carries meaningful risk, follow these rules:

1. Ask one key clarifying question before implementation instead of making a risky assumption.
2. For important decisions, explain the reasoning and tradeoffs briefly, not just the conclusion.
3. If multiple questions need confirmation, ask the single most critical one first and wait for the answer before continuing.
4. If information is uncertain, state the assumption clearly. If it cannot be confirmed or is unknown, say so directly and do not invent facts.
