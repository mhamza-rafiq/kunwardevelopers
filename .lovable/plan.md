

## Content Overhaul + Terracotta & Bottle Green Color Scheme

This is a large-scale update covering two areas: (A) correcting all content across the site with the provided narrative, and (B) switching the color palette from Navy/Gold to Terracotta/Bottle Green.

---

### A. Color Scheme Change

**File: `src/index.css`** — Replace the entire CSS variable system:

| Current | New |
|---------|-----|
| Background: Midnight Navy `#0A1D37` | Deep Charcoal/Dark Warm `#1A1612` (warm dark base) |
| Foreground: Sandstone Cream `#F5F2E8` | Warm Cream `#F5EDE3` |
| Accent: Brushed Gold `#D4AF37` | Terracotta `#C4622D` |
| Emerald `#1B7741` | Bottle Green `#1A5E4A` |
| Bronze `#A67C52` | Sienna `#8B5A3C` |

The `--accent` token (used everywhere for gold highlights, CTA buttons, accent text) becomes terracotta. The `--emerald` becomes bottle green. Background shifts from cool navy to a warm dark tone that complements terracotta. The girih pattern SVGs in the CSS also get their fill color updated from `#D4AF37` to the new terracotta.

**File: `tailwind.config.ts`** — Add `terracotta` and `bottle-green` as named colors alongside existing extended palette.

---

### B. Content Updates

#### 1. Homepage Hero (`src/components/home/Hero.tsx`)
- Subheadline: Update to reflect developer role accurately
- Proof strip: Keep "70 Years", "C-1 Status", "30,000+ Kanals", update "Quarry to Gate" to "Mining to Communities"
- CTA: Change "Explore Top City" to "Explore Our Projects"

#### 2. Legacy Strip (`src/components/home/LegacyStrip.tsx`)
Replace milestones with accurate history:
- **1956**: Post-migration foundation from Tando Jam, Hyderabad
- **1972–1980**: Kunwar Colony Chishtian, Kunwar Settlement Qazi Wala Road
- **1990–2010**: ~12 housing projects, ~10,000 kanals developed
- **2010–2024**: Mega infrastructure works (motorway, bridges) + Top City development contract

Update the header paragraph — remove "Kunwar Sahib" founder reference, use accurate family narrative.

#### 3. Chain We Own (`src/components/home/ChainWeOwn.tsx`)
- Update stats: 6 leases stays, C-1 stays, families count to 25,000+ stays
- Update descriptions to reflect subsidiaries: Pak-Italia Diligence (C-1), Yellow Line Constructions
- Add mining specifics: Lead (Khuzdar), Coal (Orakzai), Emerald (Chitral), Granite (Bajaur), Pink Salt (Khushab)

#### 4. Top City Showcase (`src/components/home/TopCityShowcase.tsx`)
- Critical: Reframe as "Development Partner" not project owner
- Change headline from "Where 10,000 Kanals Became Pakistan's Future" to something like "Developed by Kunwar. Trusted by Pakistan."
- Update copy: "We were engaged as the developer of Top City Islamabad" — emphasize the development contract, not ownership
- Remove "Pakistan's first true smart city wasn't a government vision. It was ours."

#### 5. Lakeshore Showcase (`src/components/home/LakeshoreShowcase.tsx`)
- **Replace entirely** with Oriental Tower Kunwar Block showcase
- This is Kunwar Developers' own project, not Lakeshore
- Update all copy, stats, and CTA link accordingly
- Rename component references or repurpose the component

#### 6. Leadership Preview (`src/components/home/LeadershipPreview.tsx`)
- Update bio text with the provided Hassan Masood Kunwar narrative (condensed for homepage)
- Remove "Chairman" title references that imply founding — use accurate positioning
- Highlight: HKS International (2010), Health Card initiative, Cathay Oil consultancy, KP Vice Chairman BoIT

#### 7. Leadership Page (`src/pages/Leadership.tsx`)
- Replace `leaders` array with accurate Hassan Masood Kunwar profile using the full bio provided
- Update credentials to: Health Card Policy Creator, VP BoIT KP, Osaka Expo 2025 Representative
- Update timeline with accurate dates from the provided content
- Remove "Kunwar Qutub ud din" as founder — the family legacy dates to 1956 migration
- Add Board of Directors as governance structure (keep)

#### 8. Footer (`src/components/home/Footer.tsx`)
- Update brand tagline to: "Since 1956, we have not merely developed land—we have built communities, legacies, and futures."

#### 9. About Page components
- `BrandStory.tsx`: Update the story paragraph with accurate founding narrative (1956 migration from Tando Jam)
- Update stats: "30,000+" kanals (not 10,000+)

---

### Technical Details

- All color changes flow through CSS custom properties in `src/index.css`, so updating `--accent`, `--background`, `--foreground` etc. propagates automatically to every component
- The SVG pattern fills in `.girih-pattern`, `.girih-layer`, `.pattern-colony`, `.pattern-corridor`, `.pattern-node` need their hex colors updated from gold/bronze/emerald to terracotta/bottle-green variants
- The `LakeshoreShowcase` component will be repurposed as `OrientalTowerShowcase` — the file can be renamed or the content replaced in-place
- The route `/lakeshore` in `App.tsx` should be updated or redirected to the new project page
- All `text-accent` usage site-wide will automatically shift from gold to terracotta

**Files to modify**: `src/index.css`, `tailwind.config.ts`, `Hero.tsx`, `LegacyStrip.tsx`, `ChainWeOwn.tsx`, `TopCityShowcase.tsx`, `LakeshoreShowcase.tsx`, `LeadershipPreview.tsx`, `Footer.tsx`, `BrandStory.tsx`, `Leadership.tsx`, `App.tsx`

