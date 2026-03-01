

## Fix Hero Mobile Layout

### Issues from Screenshot
1. **CTA buttons** stretch full-width edge-to-edge — they need max-width constraint so they don't look like banners
2. **Proof strip** serif headings ("Quarry to Gate") are too large on mobile, causing awkward line breaks
3. **Scroll indicator** is squeezed between CTAs and proof strip

### Changes

**`src/components/home/Hero.tsx`**

1. **Constrain CTA button width** (line 148): Add `max-w-xs mx-auto` to the CTA container on mobile so buttons don't span the full viewport width:
   - `"flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center max-w-xs sm:max-w-none mx-auto sm:mx-0"`

2. **Reduce proof strip heading size on mobile** (lines 186, 190, 194, 198): Change `text-2xl md:text-3xl` to `text-xl md:text-3xl` for the accent stat text.

3. **Add breathing room to scroll indicator** (line 170): Change `pb-4` to `py-6` so there's space above and below the scroll cue.

