```markdown
# flavor-factory-site-v3 Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns, coding conventions, and content update workflows for the `flavor-factory-site-v3` repository. The project is a TypeScript-based website (no framework detected) that emphasizes clear, maintainable code and streamlined content management, especially for homepage and section content. You'll learn how to follow the repository's conventions, update content, and use suggested commands to simplify common tasks.

## Coding Conventions

### File Naming
- **PascalCase** is used for all component and TypeScript file names.
  - Example: `Hero.tsx`, `ProofStrip.tsx`, `FlavorProblems.tsx`

### Import Style
- **Alias imports** are used to reference modules.
  ```typescript
  import { Hero } from '@/components/Hero';
  import { siteCopy } from '@/data/site-copy';
  ```

### Export Style
- **Named exports** are preferred.
  ```typescript
  // In components/Hero.tsx
  export function Hero() {
    // ...
  }
  ```

### Example: Component File
```typescript
// components/CTA.tsx
import { siteCopy } from '@/data/site-copy';

export function CTA() {
  return (
    <section>
      <h2>{siteCopy.ctaTitle}</h2>
      <button>{siteCopy.ctaButton}</button>
    </section>
  );
}
```

## Workflows

### Homepage Content Revision
**Trigger:** When someone wants to update or refine the homepage messaging, copy, or layout.  
**Command:** `/revise-homepage-content`

1. **Edit content components** for homepage sections:
   - `components/Hero.tsx`
   - `components/ProofStrip.tsx`
   - `components/FlavorProblems.tsx`
   - `components/QualitySupport.tsx`
   - `components/CTA.tsx`
2. **Update the main homepage layout** in `app/page.tsx` as needed.
3. **Adjust navigation or footer** components if messaging or links change:
   - `components/layout/Header.tsx`
   - `components/layout/Footer.tsx`
4. **Update site-wide copy data** in `data/site-copy.ts` if navigation labels or CTAs are changed.

**Example: Updating the Hero Section**
```typescript
// components/Hero.tsx
export function Hero() {
  return (
    <header>
      <h1>Discover Your Flavor Solution</h1>
      <p>We help brands create unforgettable taste experiences.</p>
    </header>
  );
}
```

---

### Section Content Simplification
**Trigger:** When someone wants to make a section more concise, readable, or focused.  
**Command:** `/simplify-section`

1. **Identify the target section/component** for simplification.
2. **Edit the relevant component file** to reduce copy or remove unnecessary elements.
   - For example, shorten text in `components/ProofStrip.tsx` or remove redundant buttons in `components/CTA.tsx`.
3. **Test the updated section** for clarity and alignment with site goals.

**Example: Simplifying a CTA**
```typescript
// Before
export function CTA() {
  return (
    <section>
      <h2>Ready to get started?</h2>
      <p>Contact us today to learn more about our flavor solutions.</p>
      <button>Contact Us</button>
    </section>
  );
}

// After
export function CTA() {
  return (
    <section>
      <h2>Ready to get started?</h2>
      <button>Contact Us</button>
    </section>
  );
}
```

## Testing Patterns

- **Test files** use the `*.test.*` pattern (e.g., `Hero.test.tsx`).
- **Testing framework** is unknown; check for test files alongside components.
- **Best practice:** Place tests in the same directory as the component, using the same PascalCase naming convention.

**Example:**
```
components/
  Hero.tsx
  Hero.test.tsx
```

## Commands

| Command                   | Purpose                                                         |
|---------------------------|-----------------------------------------------------------------|
| /revise-homepage-content  | Revise and humanize homepage content and layout                 |
| /simplify-section         | Simplify and clarify content in a specific section/component    |
```
