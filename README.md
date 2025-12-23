# Code & Capital Brand Guidelines

> **Where ideas become leverage**

A comprehensive brand system for Code & Capital featuring Electric Indigo (#4338CA), Adobe Garamond Pro typography, and an editorial-first design philosophy with ruthless restraint.

## Version 2.1 Changes

This update addresses colour inconsistencies, tagline implementation issues, and introduces redesigned logomarks.

### What's Fixed

**Colour Consistency**
- Components section now uses Electric Indigo (#4338CA) throughout
- Removed legacy red (#E01B3B) and blue (#1B66FF) colours
- Standardised border colours to #E4E4E7 across all components
- Updated scrollbar and selection colours to use CSS variables

**Tagline Implementation**
- Fixed font size: 10px (was 8px)
- Fixed letter spacing: 0.15em (was 0.05em)  
- Added uppercase text transform
- Fixed margin: 12px (was 96px)
- Removed opacity modifier — grey colour provides sufficient restraint

**Logomarks Redesigned**
- `LogoMark`: Geometric ampersand constructed from SVG paths
- `LogoIcon`: Interlocking C monogram representing Code & Capital
- `LogoFavicon`: Optimised mark for 16x16 and 32x32 pixel grids
- All marks now render without font dependencies

## Quick Start

```bash
npm install
npm run dev
```

## Brand Colours

```css
--color-indigo: #4338CA;        /* Electric Indigo - Primary */
--color-indigo-light: #6366F1;  /* Light variant */
--color-indigo-dark: #312E81;   /* Dark variant */
--color-text: #09090B;          /* Near Black */
--color-text-secondary: #27272A;
--color-text-muted: #71717A;
--color-border: #E4E4E7;        /* Light Grey */
--color-background: #FFFFFF;    /* Pure White */
```

## Typography

- **Primary**: Adobe Garamond Pro (EB Garamond fallback)
- **Monospace**: IBM Plex Mono
- **Body line height**: 1.7
- **Heading tracking**: -0.02em

## Logo Usage

```tsx
import { Logo, LogoMark, LogoIcon, LogoFavicon, LogoMinimal } from './components/Logo';

// Full wordmark with tagline
<Logo variant="primary" size="xl" showTagline />

// Geometric ampersand for social/app icons
<LogoMark variant="indigo" size={120} />

// Interlocking C for brand marks
<LogoIcon variant="indigo" size={120} />

// Favicon-optimised mark
<LogoFavicon size={32} />

// Text shorthand for inline use
<LogoMinimal variant="indigo" size="lg" />
```

## File Structure

```
src/
├── components/
│   ├── Logo.tsx              # All logo variants
│   ├── LogoSection.tsx       # Logo documentation
│   ├── ComponentsSection.tsx # UI component library
│   ├── ColorSection.tsx      # Colour system
│   ├── TypographySection.tsx # Type system
│   └── ...
├── styles/
│   └── globals.css           # CSS variables & base styles
└── index.css                 # Tailwind output
```

## Design Philosophy

1. **Editorial First** — Content is sacred. Design serves the narrative.
2. **Electric Indigo** — Distinctive without being loud.
3. **Thoughtful Restraint** — Fewer elements, executed perfectly.

---

**Built with ruthless restraint.** Every decision intentional. Every pixel purposeful.
