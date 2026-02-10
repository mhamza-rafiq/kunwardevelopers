
# Cinematic Full-Viewport Homepage Transformation

## The Problem

The homepage currently looks like a template landing page: everything centered, text-heavy hero with logo + overline + headline + paragraph + buttons + proof strip all stacked vertically. The background image is barely visible (30% opacity with heavy overlay). Sections below lack dramatic visual impact and feel like content blocks rather than cinematic "acts."

## The Vision

Transform each section into a **cinematic full-viewport frame** -- like scenes in a documentary film. Each "act" should feel like a deliberate, dramatic beat that commands the full screen.

---

## Section-by-Section Redesign

### 1. Hero Section -- "The Opening Shot"

**Current problems:**
- Logo, overline, headline, paragraph, 2 CTAs, and proof strip all crammed in center
- Background image at 30% opacity is invisible
- Too much text visible at once -- no drama
- Proof strip feels tacked on

**Changes:**
- Remove the `AnimatedLogoReveal` from hero (the header already has the logo)
- Push the headline to left-aligned on desktop for editorial gravitas (center on mobile)
- Increase background image opacity from 30% to 45-50% for more cinematic depth
- Lighten the gradient overlay to let the image breathe more
- Make the headline larger and more impactful (up to `text-8xl` on xl screens)
- Reduce the subheading text -- show only the first 2 sentences, not the full paragraph
- Separate the Proof Strip visually: position it at the absolute bottom of the viewport as a horizontal bar
- Add a thin gold accent line above the headline for editorial feel
- Use `h-screen` instead of `min-h-screen` to enforce exact viewport height

### 2. Legacy Strip -- "The Timeline"

**Current:** Already has horizontal scroll pinning which is good. Minor adjustments:
- Reduce header section padding from `py-20 md:py-32` to `py-16 md:py-24` for tighter pacing
- Already using `h-screen` for the pinned area -- keep as is

### 3. Chain We Own -- "The Differentiator"

**Current problems:**
- The three boxes (Mining, Construction, Communities) feel small and corporate
- Section has `min-h-screen flex flex-col justify-center py-20` but content doesn't fill the space dramatically

**Changes:**
- Use `h-screen` instead of `min-h-screen`
- Make the three chain boxes larger on desktop (`w-64 h-64` instead of `w-56 h-56`)
- Add a subtle horizontal gold line spanning the full width behind the boxes
- Move the closing quote to a separate visual beat with more breathing room

### 4. Top City Showcase -- "Flagship Reveal"

**Current problems:**
- Content + stats card in a 2-column grid doesn't feel cinematic
- Background at 80% overlay is too dark

**Changes:**
- Use `h-screen` instead of `min-h-screen`
- Reduce overlay from `bg-background/80` to `bg-background/65` for more atmospheric imagery
- Make the stats card more dramatic: larger typography, less card-like

### 5. Lakeshore Showcase -- "The Jewel"

**Changes:**
- Use `h-screen` instead of `min-h-screen`
- Reduce overlay from `bg-background/75` to `bg-background/60`
- Add vertical accent lines on both sides for a framed cinematic feel

### 6. Leadership Preview

**Changes:**
- Use `h-screen` instead of `min-h-screen flex flex-col justify-center py-20`
- Use `h-screen flex items-center` for true viewport centering

### 7. Footer

- Keep as is -- footer should not be full viewport

---

## Technical Details

### Files Modified

| File | Key Changes |
|------|------------|
| `src/components/home/Hero.tsx` | Remove logo, left-align content on desktop, increase bg opacity, shorten subhead, reposition proof strip to bottom, use `h-screen`, larger headline |
| `src/components/home/ChainWeOwn.tsx` | `h-screen` instead of `min-h-screen`, larger chain boxes |
| `src/components/home/TopCityShowcase.tsx` | `h-screen`, reduce overlay darkness |
| `src/components/home/LakeshoreShowcase.tsx` | `h-screen`, reduce overlay darkness |
| `src/components/home/LeadershipPreview.tsx` | `h-screen flex items-center` |
| `src/components/home/LegacyStrip.tsx` | Tighten header padding |

### Hero Layout Change (Desktop)

The hero will shift from centered text to a left-aligned editorial layout on large screens:

- Content container: `text-left lg:max-w-3xl lg:ml-0` (left-aligned on desktop)
- Gold accent line: thin horizontal line above overline
- Headline: `text-4xl md:text-6xl lg:text-7xl xl:text-8xl`
- Subheading: Trimmed to 2 sentences only
- CTAs: Left-aligned row
- Proof Strip: Absolutely positioned at the bottom of the viewport, spanning full width with a subtle top border

### Mobile Considerations

- On mobile, hero stays centered (only left-aligns on `lg:` breakpoint)
- `h-screen` sections may need `min-h-screen` fallback on very small screens to prevent content overflow -- we'll use `h-screen min-h-0` with overflow handling
- Proof strip wraps to 2x2 grid on mobile, stays as 4 columns on desktop
