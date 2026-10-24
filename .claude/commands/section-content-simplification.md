---
name: section-content-simplification
description: Workflow command scaffold for section-content-simplification in flavor-factory-site-v3.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /section-content-simplification

Use this workflow when working on **section-content-simplification** in `flavor-factory-site-v3`.

## Goal

Simplify and clarify content in a specific section or component, often by reducing copy, removing unnecessary elements, or making language more direct.

## Common Files

- `components/Hero.tsx`
- `components/ProofStrip.tsx`
- `components/FlavorProblems.tsx`
- `components/QualitySupport.tsx`
- `components/CTA.tsx`
- `components/layout/Header.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify the target section/component for simplification.
- Edit the relevant component file to reduce copy or remove elements.
- Test the updated section for clarity and alignment with site goals.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.