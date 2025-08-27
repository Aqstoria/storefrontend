# 🖼️ Image Paths & Instructions

This document contains all the image paths and setup instructions for the Cartzilla landing page sections.

## 📁 Folder Structure

```
Frontend/public/images/
├── countries/           ← Country images for "Across borders" section
├── weekly-promotion/   ← Product images for "Weekly promotion" section
└── README.md          ← This file
```

## 🌍 Across Borders Section

**Location:** `Frontend/src/components/sections/across-borders-section.tsx`

### Required Images (PNG format):
```
Frontend/public/images/countries/
├── korea.png      ← Korea country image (1440x640px HD)
├── china.png      ← China country image (1440x640px HD)
└── india.png      ← India country image (1440x640px HD)
```

### Image Specifications:
- **Format:** PNG
- **Size:** 1440x640 pixels (HD resolution)
- **Display:** Width 120%, Height 294px
- **Style:** `object-fit: cover` for proper scaling
- **Text:** All show "Ultimate finds from around the world"

### Layout:
- **3 cards** displayed in a row (no pagination)
- **Responsive:** Col lg={4} for each country
- **Styling:** Light background, rounded corners, centered text

---

## 🎯 Weekly Promotion Section

**Location:** `Frontend/src/app/home/page.tsx` (Lines 73-180)

### Required Images (PNG format):
```
Frontend/public/images/weekly-promotion/
├── frying-pan.png           ← Frying pan with egg (120x120px)
├── gold-earrings.png        ← Gold earrings (60x60px)
├── pink-ballet-flats.png    ← Pink ballet flats (60x60px)
├── beige-jacket.png         ← Beige jacket (60x60px)
├── pink-gua-sha.png         ← Pink gua sha tool (60x60px)
└── gold-bottle.png          ← GOLD bottle with dropper (80x80px)
```

### Layout Structure:
```
┌─────────────────────────────────────────────────────────────┐
│                    Weekly promotion                         │
├─────────────┬─────────────────────────────────────────────┤
│ Small Card  │             3 Large Cards                  │
│ (Left)      │                                             │
│             │  ┌─────────┬─────────┬─────────┐           │
│ Frying Pan  │  │Hot Deals│Sale Items│Premium │           │
│ 120x120px   │  │2 images │2 images │1 image │           │
│             │  └─────────┴─────────┴─────────┘           │
└─────────────┴─────────────────────────────────────────────┘
```

### Card Details:

#### **Card 1 (Left - Small):**
- **Title:** "Bestsellers for less"
- **Image:** `frying-pan.png` (120x120px)
- **Price:** $12.99
- **Subtitle:** "Summer Sale"

#### **Card 2 (Right - Large):**
- **Title:** "Hot deals"
- **Images:** 
  - `gold-earrings.png` (60x60px)
  - `pink-ballet-flats.png` (60x60px)
- **Price:** $24.99
- **Subtitle:** "Summer Sale"

#### **Card 3 (Right - Large):**
- **Title:** "All sale items here"
- **Images:**
  - `beige-jacket.png` (60x60px)
  - `pink-gua-sha.png` (60x60px)
- **Price:** $18.99
- **Subtitle:** "Summer Sale"

#### **Card 4 (Right - Large):**
- **Title:** "Premium deals"
- **Image:** `gold-bottle.png` (80x80px)
- **Price:** $32.99
- **Subtitle:** "Summer Sale"

---

## 🚀 Setup Instructions

### Step 1: Add Images
Place your PNG images in the corresponding folders with the exact names listed above.

### Step 2: Update Code
In `Frontend/src/app/home/page.tsx`:

#### For Across Borders:
1. **Uncomment Image component** (remove `/* */` around lines 500-510)
2. **Comment out placeholder div** (add `/* */` around lines 485-495)

#### For Weekly Promotion:
1. **Uncomment Image components** (remove `/* */` around all Image tags)
2. **Comment out placeholder divs** (add `/* */` around emoji divs)

### Step 3: Verify
- All images should display correctly
- Pagination should work for Across Borders
- All cards should show proper images in Weekly Promotion

---

## 📝 Notes

- **Image Quality:** Use high-quality PNG images for best results
- **File Names:** Must match exactly (case-sensitive)
- **Dimensions:** Recommended sizes listed above, but images will scale automatically
- **Format:** PNG format is required for transparency support
- **Performance:** Optimize images for web (compress if needed)

---

## 🔗 Related Files

- **Main Page:** `Frontend/src/app/home/page.tsx`
- **Hero Slider:** `Frontend/src/app/home/hero-slider.tsx`
- **Header:** `Frontend/src/components/layout/header-electronics.tsx`
- **Footer:** `Frontend/src/components/layout/footer-electronics.tsx`

---

*Last Updated: August 27, 2025*
*Created for Cartzilla Landing Page Project*
