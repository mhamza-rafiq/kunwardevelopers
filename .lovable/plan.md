

## Fix Section Overlap and Spacing

### Root Cause
Sections like ChainWeOwn have `h-screen` which clips content when it exceeds viewport height. The header margins (`mb-24`), 256px stat boxes, descriptions below them, and the bottom quote easily exceed 100vh, causing content to bleed into adjacent sections.

### Changes

#### 1. Convert `h-screen` to `min-h-screen` with padding
All content sections need to grow with their content instead of being hard-capped.

**`src/components/home/ChainWeOwn.tsx`** (line 154)
- Change `h-screen flex flex-col justify-center` to `min-h-screen flex flex-col justify-center py-24`
- Reduce `mb-16 md:mb-24` on header to `mb-12 md:mb-16` to reclaim space
- Reduce `mt-20 md:mt-32` on quote to `mt-12 md:mt-16`

**`src/components/home/TopCityShowcase.tsx`** (line 50)
- Change `h-screen` to `min-h-screen py-24`

**`src/components/home/LakeshoreShowcase.tsx`** (line 50)
- Change `h-screen` to `min-h-screen py-24`

**`src/components/home/LeadershipPreview.tsx`** (line 50)
- Change `h-screen` to `min-h-screen py-24`

#### 2. Hero stays `h-screen` (intentional full-viewport)
No change needed -- Hero is designed to fill exactly one viewport.

#### 3. LegacyStrip -- no structural change
The pinned horizontal scroll wrapper already uses `h-screen` correctly for the scroll mechanic. The `overflow-hidden` and z-index isolation from prior work remain.

#### 4. Footer
Already uses auto-height with padding -- no change needed.

