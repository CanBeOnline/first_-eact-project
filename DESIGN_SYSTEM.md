# 🎨 Design System - Professionelle Definition

## 📐 Farbpalette

### Primärfarbe: Brand Blue
**Zweck**: Hauptfarbe für CTAs, Links, Akzente, Branding
**Hex**: `#4d7dff` (brand-500)
**Psychologie**: Vertrauen, Professionalität, Technologie, Innovation

```
brand-50:  #f5f8ff  → Sehr helle Hintergründe, Subtile Akzente
brand-100: #e9efff  → Helle Hintergründe, Cards
brand-200: #cddcff  → Leichte Hover-States
brand-300: #a8c0ff  → Disabled States
brand-400: #7ea1ff  → Secondary Buttons
brand-500: #4d7dff  → PRIMARY (Buttons, Links, Akzente) ⭐
brand-600: #325fe6  → Hover States
brand-700: #2848b4  → Active States, Darker Accents
brand-800: #213a8f  → Text auf hellem Hintergrund
brand-900: #1c316f  → Sehr dunkle Akzente
```

### Sekundärfarbe: Accent Orange
**Zweck**: Highlights, Warnungen, Aufmerksamkeit, Energie
**Hex**: `#ff5a26` (accent-500)
**Psychologie**: Energie, Kreativität, Wärme, Aktion

```
accent-50:  #fff8f5  → Sehr helle Hintergründe
accent-100: #ffeae1  → Helle Hintergründe
accent-200: #ffd0bf  → Leichte Akzente
accent-300: #ffab8d  → Subtile Highlights
accent-400: #ff7c51  → Secondary Highlights
accent-500: #ff5a26  → PRIMARY (Highlights, CTAs) ⭐
accent-600: #e04316  → Hover States
accent-700: #b43515  → Active States
accent-800: #8c2b16  → Darker Accents
accent-900: #6e2414  → Sehr dunkle Akzente
```

### Neutrale Farben: Graustufen
**Zweck**: Text, Hintergründe, Borders, Struktur

```
gray-50:  #f9fafb  → Sehr helle Hintergründe
gray-100: #f3f4f6  → Helle Hintergründe
gray-200: #e5e7eb  → Borders, Dividers
gray-300: #d1d5db  → Disabled Elements
gray-400: #9ca3af  → Placeholder Text
gray-500: #6b7280  → Secondary Text
gray-600: #4b5563  → Body Text
gray-700: #374151  → Headings (auf hellem Hintergrund)
gray-800: #1f2937  → Primary Headings
gray-900: #111827  → Sehr dunkle Text
```

### Semantische Farben
**Zweck**: Feedback, Status, Emotionen

```
success: #10b981  → Erfolg, Bestätigung
error:   #ef4444  → Fehler, Warnung
warning: #f59e0b  → Warnung, Aufmerksamkeit
info:    #3b82f6  → Information, Hinweise
```

---

## 🔤 Typografie

### Font-Familien

#### Poppins (Headlines, Display)
**Zweck**: Alle Überschriften, CTAs, wichtige Texte
**Charakter**: Modern, Geometrisch, Freundlich, Professionell
**Gewichtungen verfügbar**:
- Thin (100)
- ExtraLight (200)
- Light (300)
- Regular (400) ⭐
- Medium (500)
- SemiBold (600) ⭐
- Bold (700) ⭐
- ExtraBold (800)
- Black (900)

**Verwendung**:
- H1, H2, H3, H4, H5, H6
- Buttons
- Navigation
- Hero-Text
- Section Headings

#### Inter (Body, Fließtext)
**Zweck**: Alle Fließtexte, Beschreibungen, längere Inhalte
**Charakter**: Lesbar, Modern, Professionell, Optimiert für Screens
**Gewichtungen**: Variable Font (100-900)
**Italic**: Verfügbar

**Verwendung**:
- Body Text
- Paragraphs
- Beschreibungen
- Formulare
- Cards Content

### Typografie-Skala

```
Hero H1:      text-5xl md:text-6xl lg:text-7xl  (48-72px)
              font-bold (700)
              font-poppins
              leading-tight

Section H2:   text-3xl md:text-4xl lg:text-5xl  (30-48px)
              font-bold (700)
              font-poppins
              leading-tight

Subsection H3: text-2xl md:text-3xl             (24-30px)
              font-semibold (600)
              font-poppins
              leading-snug

H4:           text-xl md:text-2xl                (20-24px)
              font-semibold (600)
              font-poppins

Body Large:   text-lg md:text-xl                 (18-20px)
              font-normal (400)
              font-inter
              leading-relaxed

Body:         text-base md:text-lg                (16-18px)
              font-normal (400)
              font-inter
              leading-relaxed

Body Small:   text-sm md:text-base               (14-16px)
              font-normal (400)
              font-inter
              leading-normal

Caption:      text-xs md:text-sm                 (12-14px)
              font-normal (400)
              font-inter
              leading-normal
```

### Line Heights
```
tight:   1.25  → Headlines
snug:   1.375 → Subheadings
normal: 1.5   → Standard
relaxed: 1.625 → Body Text
loose:   2     → Zitate, Special Content
```

---

## 📏 Spacing System

### Konsistente Abstände (8px Grid)
```
0:   0px
1:   4px   → Sehr kleine Abstände
2:   8px   → Kleine Abstände
3:   12px  → Kleine Abstände
4:   16px  → Standard Abstände ⭐
6:   24px  → Mittlere Abstände ⭐
8:   32px  → Große Abstände
12:  48px  → Sehr große Abstände
16:  64px  → Extra große Abstände
20:  80px  → Hero Abstände
24:  96px  → Section Abstände
32:  128px → Extra Section Abstände
```

### Container & Layout
```
Container Max Width: max-w-6xl (1152px)
Container Padding:   px-4 md:px-6 lg:px-8
Section Padding:     py-16 md:py-24 lg:py-32
Element Spacing:     space-y-6 md:space-y-8
```

---

## 🎯 Verwendungsrichtlinien

### Farben
- **Primär (Brand Blue)**: Für alle interaktiven Elemente, Links, CTAs
- **Sekundär (Accent Orange)**: Sparsam für Highlights, wichtige CTAs
- **Grau**: Für Text, Hintergründe, Borders
- **Maximal 2-3 Farben** pro Sektion (außer Grau)

### Typografie
- **Poppins**: Nur für Headlines und wichtige Texte
- **Inter**: Für alle Fließtexte
- **Maximal 2-3 Schriftgrößen** pro Sektion
- **Kontrast**: Mindestens 4.5:1 für Body Text, 3:1 für Headlines

### Spacing
- **Konsistent**: Immer 4/8/16/24/32 Einheiten verwenden
- **Rhythmus**: Gleiche Abstände für ähnliche Elemente
- **Weißraum**: Genug Platz für Atmung

---

## ✅ Checkliste für Konsistenz

- [ ] Nur definierte Farben verwenden
- [ ] Poppins für Headlines, Inter für Body
- [ ] Konsistente Abstände (8px Grid)
- [ ] Ausreichender Kontrast (WCAG AA)
- [ ] Responsive Typografie (md:, lg: Breakpoints)
- [ ] Maximal 2-3 Farben pro Sektion
- [ ] Maximal 2-3 Schriftgrößen pro Sektion

