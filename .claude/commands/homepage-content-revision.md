---
name: homepage-content-revision
description: Workflow command scaffold for homepage-content-revision in flavor-factory-site-v3.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /homepage-content-revision

Use this workflow when working on **homepage-content-revision** in `flavor-factory-site-v3`.

## Goal

Revise and humanize homepage content by updating multiple homepage-related components and layout files to improve messaging and clarity.

## Common Files

- `components/Hero.tsx`
- `components/ProofStrip.tsx`
- `components/FlavorProblems.tsx`
- `components/QualitySupport.tsx`
- `components/CTA.tsx`
- `app/page.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit content components for homepage sections (e.g., Hero, ProofStrip, FlavorProblems, QualitySupport, CTA).
- Update main homepage layout file (app/page.tsx) as needed.
- Adjust navigation or footer components if messaging or links change.
- Update site-wide copy data if navigation labels or CTAs are changed.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.