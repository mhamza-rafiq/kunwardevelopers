

## Fix Section Spacing and Redesign Hero

### Problem
The homepage sections are overlapping because of ScrollTrigger pinning in the LegacyStrip combined with inconsistent section isolation. The Hero also has too much text and is left-aligned instead of centered.

### Changes

#### 1. Hero Section -- Center-Aligned with Less Text
**File: `src/components/home/Hero.tsx`**

- Center-align all content (remove `lg:text-left` and `lg:justify-start`)
- Remove the gold accent line (only makes sense for left-aligned layout)
- Shorten the headline to a single powerful line, e.g.: **"We Build What Lasts."**
- Remove or shorten the subheadline to one short sentence
- Keep CTA buttons centered and inline
- Keep the Proof Strip at the bottom
- Remove the vertical brand mark (bottom-right "Kunwar Developers - Est. 1956") as it conflicts with centered layout

#### 2. Fix Section Overlap -- Add Proper Isolation
**File: `src/components/home/LegacyStrip.tsx`**

- Add `position: relative` and `z-index` to ensure the pinned section doesn't bleed into adjacent sections
- Wrap the entire LegacyStrip in a container with explicit `overflow: hidden` on the outer wrapper to prevent visual bleed

**File: `src/pages/Index.tsx`**

- Wrap each section in a `<div>` with `relative z-[index]` classes to create proper stacking context, ensuring sections paint on top of each other correctly as you scroll
- Apply ascending z-index values so later sections render above earlier pinned ones

#### 3. Section-by-Section Spacing Fixes
For all full-viewport sections (`ChainWeOwn`, `TopCityShowcase`, `LakeshoreShowcase`, `LeadershipPreview`):

- Ensure each section has `relative` positioning and a stacking context via `z-10` or similar
- Confirm `h-screen` and `overflow-hidden` are consistently applied so no content leaks out

### Technical Details

The root cause of the overlap is the GSAP ScrollTrigger `pin: true` on the LegacyStrip wrapper. When ScrollTrigger pins an element, it manipulates `position: fixed` and adds spacer divs. Without proper z-index stacking on subsequent sections, they can appear behind or mixed with the pinned content.

The fix uses CSS stacking contexts on each section wrapper in `Index.tsx` to ensure clean layer ordering:

```text
Hero          -> z-10
LegacyStrip   -> z-20
ChainWeOwn    -> z-30
TopCity       -> z-40
Lakeshore     -> z-50
Leadership    -> z-60
Footer        -> z-70
```

Each wrapper div gets `relative` + the z-index + `bg-background` so sections fully cover what's behind them as you scroll.

