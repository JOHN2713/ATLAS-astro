# Atlas Private Wealth - Design Context & Specifications

## Project Overview
Recreating https://atlas-beta-five.vercel.app/ using Astro + React + Tailwind CSS
Based on GitHub repo: https://github.com/JOHN2713/ATLAS

## Color Palette
- **Primary Background**: `#f7f3ed` (atlas-primary)
- **Dark Navy**: `#0d1926` (atlas-dark)
- **Secondary Cream**: `#ebe7e0` (atlas-secondary)
- **Gold Accent**: `#d4af37` (atlas-gold)
- **What Is Atlas Section**: `#0c1825` (custom dark background)

## Typography
- **Serif (Headings)**: EB Garamond - for large display text
- **Sans (Body)**: Source Sans 3 - for body text
- **Display**: CameraPlainVariable - special decorative font
- **Letter Spacing**: 
  - Labels: `tracking-[0.2em]` to `tracking-[0.3em]`
  - Uppercase: `tracking-widest`

## Design Patterns

### Buttons
- Border-based, not filled backgrounds
- Uppercase text with wide tracking
- Arrow icon with hover translation: `group-hover:translate-x-1`
- Example: `border border-atlas-dark/20 hover:border-atlas-gold`

### Icons
- SVG with `stroke-width="1"` or `stroke-width="1.5"` for minimalism
- Gold accents on hover: `group-hover:border-atlas-gold`
- Icon boxes: bordered squares with centered SVG

### Decorative Elements
- **Diamond separator**: `<svg viewBox="0 0 24 24"><path d="M12 2L22 12L12 22L2 12Z" /></svg>`
- **Vertical lines**: Accent lines with `w-px` width
- **Corner decorations**: Border animations on hover using scale transforms

### Grid Background Pattern
```tsx
<div
  className="absolute inset-0 opacity-[0.08]"
  style={{
    backgroundImage: `
      linear-gradient(to right, #0a1624 1px, transparent 1px),
      linear-gradient(to bottom, #0a1624 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  }}
/>
```

## Layout Structure

### Container Patterns
- Max width: `max-w-5xl` to `max-w-7xl`
- Padding: `px-6 md:px-12`
- Vertical spacing: `py-24` for sections

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:`, `lg:`
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Animation Patterns (Framer Motion)

### Standard Entrance
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

### Staggered Delays
- First element: `delay: 0.2`
- Second element: `delay: 0.4`
- Third element: `delay: 0.6`

### Hover Effects
- Button arrows: `translate-x-1`
- Cards: Scale transforms for borders
- Icons: Color transitions

## Sections Completed

### 1. Navigation
- Fixed position with backdrop blur
- Mobile menu with AnimatePresence
- Tracking-widest for links

### 2. Hero
- Decorative separators (lines + diamond)
- Large serif typography
- Border-based CTA button

### 3. Principles
- Vertical layout with side numbers
- Quote marks SVG
- Vertical line accent

### 4. What Is Atlas
- **Background**: `#0c1825`
- **Alignment**: Left-aligned (not centered)
- Shield icon
- Diamond separator
- Large serif text

### 5. Areas of Focus
- **Background**: Grid pattern with `#f7f3ed` base
- 5 SVG icons in bordered boxes
- Hover effects on borders

### 6. Who We Serve
- 6 client cards with gold icons
- Corner decoration hover effects
- Grid layout

### 7. Insights
- **Background**: Grid pattern with `#f7f3ed` base
- Vertical list format
- Icons with separators between articles

### 8. Contact CTA
- Dark background section
- Inverted button styling

### 9. Footer
- Horizontal layout
- Minimal link styling

## Technical Setup

### Dependencies
```json
{
  "astro": "^4.16.17",
  "react": "^18.3.1",
  "@astrojs/react": "^3.6.2",
  "@astrojs/tailwind": "^5.1.2",
  "tailwindcss": "^3.4.17",
  "framer-motion": "^12.29.2"
}
```

### Astro Configuration
- React integration with `client:load` directive
- Tailwind CSS integration
- Components require explicit hydration

### File Structure
```
src/
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Principles.tsx
│   ├── WhatIsAtlas.tsx
│   ├── AreasOfFocus.tsx
│   ├── WhoWeServe.tsx
│   ├── Insights.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Key Learnings

1. **Astro Islands**: React components need `client:load` directive to hydrate
2. **Color Naming**: Use `atlas-*` prefix for consistency
3. **Grid Pattern**: Linear gradients for true grid (not radial for dots)
4. **Left Alignment**: What Is Atlas section is left-aligned, not centered
5. **Background Colors**: Custom hex values for dark sections (#0c1825)

## Pages Completed

### Philosophy Page ✅
- 5 principle sections with alternating backgrounds
- Structure Over Speculation (atlas-primary)
- Discipline (#ebe7e0)
- Governance (atlas-primary)
- Long-Term Capital Thinking (#0c1825 dark)
- Intergenerational Responsibility (atlas-primary)
- Closing statement section with centered CTA
- Fully responsive with proper spacing (py-16 md:py-24)
- Text scaling: text-lg md:text-xl lg:text-2xl
- Accessible at /philosophy

### Insights Page ✅
- Hero section with title and subtitle
- Filter system with 4 categories (ALL, FOUNDATIONAL ESSAYS, FINANCIAL PERSPECTIVES, LETTERS & NOTES)
- 3 article cards with unique SVG icons
- Article structure: category/date, title, excerpt, read more link
- Hover effects: icons and titles change to gold
- JavaScript filtering functionality
- CTA section with contact button
- Fully responsive
- Accessible at /insights

### About Page ✅
- Hero section with tagline
- The Platform section (4 paragraphs explaining ATLAS)
- Our Approach section with 4 pillars grid (#ebe7e0 background):
  - Selective Engagement
  - Long-Term Alignment
  - Independence
  - Discretion
- Leadership section with Gonzalo Martinez profile
- Headquarters section (dark background #0c1825) with Miami location
- Multiple CTAs throughout
- Fully responsive
- Accessible at /about

### Contact Page ✅
- Hero section with title and subtitle
- Two-column grid layout (form + contact info)
- Private Inquiry form with 3 fields:
  - Name (text input)
  - Email (email input)
  - Brief Message (textarea)
- Form validation and submit handler
- Direct Contact section with:
  - Email: contact@atlaswealth.com
  - Location: Miami
  - Discretion statement
- Closing statement section (dark background #0c1825)
- Fully responsive with lg:grid-cols-2
- Accessible at /contact

## Next Steps
- [ ] Individual article pages (3 articles)
  - Structure Over Speculation
  - Governance and Clarity
  - Letter January 2024
