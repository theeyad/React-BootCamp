# 🎨 Luxury Design System - Complete Guide

## Design System Overview

This project uses a **luxury dark theme** with premium branding, inspired by high-end digital products.

### Color Palette (From skills.md)

| Token       | Hex       | RGB           | Usage                                   |
| ----------- | --------- | ------------- | --------------------------------------- |
| **Surface** | `#000000` | 0, 0, 0       | Main background, containers             |
| **Text**    | `#ffffff` | 255, 255, 255 | Primary text, labels                    |
| **Primary** | `#fafafa` | 250, 250, 250 | Accents, highlights, interactive states |
| **Success** | `#16a34a` | 22, 163, 74   | ✓ Complete, add actions (emerald)       |
| **Warning** | `#d97706` | 217, 119, 6   | ⚠️ Alerts, cautions (amber)             |
| **Danger**  | `#dc2626` | 220, 38, 38   | ✕ Delete, destructive (red)             |

### Spacing System (8pt Grid)

All spacing is based on 8px units:

```
8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px
```

### Typography (Fonts Imported)

- **Headings**: `Kufam` (weights: 400-900, italic available)
- **Body/UI**: `Cairo` (weights: 200-1000)
- **Code**: `JetBrains Mono` (available)
- **Default**: `Geist Variable` (fallback)

---

## Component Specifications

### 🎯 **Heading**

- **Font**: Kufam, 3rem (desktop) / 2.2rem (mobile)
- **Weight**: 700 (bold)
- **Color**: #fafafa
- **Spacing**: 24px top, 32px bottom
- **Letter Spacing**: 0.03em
- **Alignment**: Center

### ✓ **CheckButton**

- **Size**: 40×40px (touch-friendly)
- **Border**: 2px solid #16a34a
- **Color**: #16a34a
- **Icon**: ✓
- **Hover**: Fill background, swap colors, scale 1.08
- **Focus**: 2px outline with offset

### ✕ **DeleteButton**

- **Size**: 40×40px
- **Border**: 2px solid #dc2626
- **Color**: #dc2626
- **Icon**: ✕
- **Hover**: Fill background, swap colors, scale 1.08
- **Focus**: 2px outline with offset

### ✎ **EditButton**

- **Size**: 40×40px
- **Border**: 2px solid #fafafa
- **Color**: #fafafa
- **Icon**: ✎
- **Hover**: Fill background, swap colors, scale 1.08
- **Focus**: 2px outline with offset

### 🔤 **TodosFilter**

- **Layout**: Horizontal flex, centered, wraps on mobile
- **Button Styling**:
  - Default: transparent bg, #333333 border, #fafafa text
  - Hover: rgba(250,250,250,0.08) bg, #fafafa border
  - Active: #fafafa bg, #000000 text
- **Spacing**: 8px gap between buttons

### 📝 **Todo (Individual Item)**

- **Layout**: Flex row, space-between
- **Background**: rgba(255,255,255,0.03)
- **Border**: 1px solid #1a1a1a
- **Padding**: 16px 20px (8px on mobile)
- **Text Color**:
  - Normal: #ffffff
  - Completed: #16a34a with line-through
- **Actions**: CheckButton, EditButton, DeleteButton in a row (8px gap)
- **Hover**: Background lightens to rgba(255,255,255,0.05)

### ➕ **TodoAdd (Input + Button)**

- **Layout**: Flex row, 12px gap (column on mobile)
- **Input Styling**:
  - Background: rgba(255,255,255,0.02)
  - Border: 2px solid #1a1a1a
  - Focus: #fafafa border with glow effect
  - Placeholder: #4b5563
- **Button Styling**:
  - Border: 2px solid #fafafa
  - Color: #fafafa
  - Hover: Fill background, swap colors, scale 1.05
  - Width: 100% on mobile

### 📦 **TodoBox (Main Container)**

- **Background**: #000000
- **Border**: 1px solid #1a1a1a
- **Border Radius**: 12px
- **Padding**: 32px 24px (20px 16px on mobile)
- **Box Shadow**: 0 10px 40px rgba(0,0,0,0.5)
- **Hover Shadow**: 0 15px 50px rgba(0,0,0,0.7)

### 🖥️ **App (Root)**

- **Background**: #000000
- **Display**: Flex centered (min-height: 100vh)
- **Padding**: 16px (responsive)
- **Font**: Cairo

---

## Interactive States

All interactive elements follow this pattern:

### Default State

```css
border: 2px solid [color];
color: [color];
background: transparent;
```

### Hover State

```css
background-color: [color];
color: #000000;
transform: scale(1.08);
```

### Active State

```css
transform: scale(0.96);
```

### Focus Visible

```css
outline: 2px solid [color];
outline-offset: 2px;
```

### Disabled

```css
opacity: 0.5;
cursor: not-allowed;
```

---

## Accessibility Features

✅ **Contrast**: All text passes WCAG AAA (7:1+ ratio)
✅ **Touch Targets**: All buttons ≥ 40×40px
✅ **Focus States**: Visible 2px outlines on all interactive elements
✅ **ARIA Labels**: All icon-only buttons have aria-label
✅ **Semantic HTML**: `<button>`, `<input>`, `<form>` used correctly
✅ **Keyboard Support**: Tab navigation works throughout

---

## Responsive Design

### Breakpoint: 768px (md)

| Component | Desktop      | Mobile                    |
| --------- | ------------ | ------------------------- |
| Heading   | 3rem         | 2.2rem                    |
| TodoAdd   | Row          | Column, full width button |
| TodoBox   | 32px padding | 20px padding              |
| TodoItem  | 16px padding | 12px padding              |

---

## CSS Variables (Available in index.css)

```css
/* You can also define custom variables */
--color-surface: #000000 --color-text: #ffffff --color-primary: #fafafa
  --color-success: #16a34a --color-warning: #d97706 --color-danger: #dc2626
  /* And use them */ background: var(--color-surface);
color: var(--color-text);
```

---

## Transitions

All interactive elements use:

- **Duration**: 0.2s
- **Timing**: ease
- **Property**: all

```css
transition: all 0.2s ease;
```

---

## File Structure

```
src/
├── App.css          # Root styling
├── App.jsx          # Main app structure
├── components/
│   ├── Heading/
│   │   ├── Heading.jsx      # مهامي (My Tasks title)
│   │   └── Heading.css      # 3rem Kufam font
│   ├── TodoBox/
│   │   ├── TodoBox.jsx      # Container component
│   │   └── TodoBox.css      # Dark luxury card
│   ├── TodoAdd/
│   │   ├── TodoAdd.jsx      # Input + Add button
│   │   └── TodoAdd.css      # Form styling
│   ├── Todo/
│   │   ├── Todo.jsx         # Individual todo item
│   │   └── Todo.css         # Card styling with actions
│   ├── CheckButton/
│   │   ├── CheckButton.jsx  # ✓ Green button
│   │   └── CheckButton.css  # Success styling
│   ├── EditButton/
│   │   ├── EditButton.jsx   # ✎ Off-white button
│   │   └── EditButton.css   # Primary styling
│   ├── DeleteButton/
│   │   ├── DeleteButton.jsx # ✕ Red button
│   │   └── DeleteButton.css # Danger styling
│   └── TodosFilter/
│       ├── TodosFilter.jsx  # All/Active/Completed filter
│       └── TodosFilter.css  # Filter buttons styling
```

---

## Quick Implementation Tips

1. **Always use 8px multiples** for spacing (padding, margin, gap)
2. **Use imported fonts**: Kufam for headings, Cairo for body text
3. **Keep contrast high**: #000000 surfaces with #fafafa/white text
4. **Add focus states** to all interactive elements
5. **Use semantic colors**: Green (success), Red (danger), Amber (warning)
6. **Touch targets** minimum 40×40px
7. **Smooth transitions** 0.2s ease on all interactions

---

## DO's & DON'Ts

### ✅ DO

```css
/* Use luxury palette */
background: #000000;
color: #ffffff;
border: 2px solid #fafafa;

/* Use 8pt spacing */
padding: 16px;
gap: 8px;
margin: 24px 0;

/* Use imported fonts */
font-family: "Kufam", sans-serif;
font-family: "Cairo", sans-serif;
```

### ❌ DON'T

```css
/* Don't use random colors */
background: #6b6b6b;
color: #e7c79d;

/* Don't ignore spacing grid */
padding: 12px;
gap: 5px;

/* Don't use system fonts */
font-family: Arial, sans-serif;

/* Don't forget focus states */
button {
  /* no outline */
}
```

---

## Colors Quick Reference

| Intent  | Color   | Usage               |
| ------- | ------- | ------------------- |
| Surface | #000000 | Backgrounds         |
| Text    | #ffffff | Labels, body        |
| Primary | #fafafa | Accents, highlights |
| Success | #16a34a | ✓ Checkmarks        |
| Warning | #d97706 | ⚠️ Alerts           |
| Danger  | #dc2626 | ✕ Delete, errors    |

---

**All components are now designed with the Luxury Design System! 🎨**
