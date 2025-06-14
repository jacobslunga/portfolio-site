# Font Integration Guide

## Overview

The portfolio now uses multiple fonts for authentic newspaper typography:

- **Tobias**: Primary serif for headings, article content, and editorial elements
- **Sohne**: Sans-serif for the main "Experiences" title, body text, and UI elements

## Font Files Needed

### Current Fonts (Already Available)

- `public/fonts/Sohne-Leicht.otf`
- `public/fonts/Sohne-Regular.otf`

### Tobias Font Files (Available)

These Tobias font files are already in `public/fonts/`:

- `public/fonts/TobiasRegular.otf` (400 weight)
- `public/fonts/TobiasMedium.otf` (500 weight)
- `public/fonts/TobiasSemiBold.otf` (600 weight)
- `public/fonts/TobiasBold.otf` (700 weight)

## Font Usage

- **Tobias** (`.font-serif`): Main headings, article content, project descriptions, experience details, editorial elements
- **Sohne** (`.font-sans`): Large "Experiences" title, UI elements, buttons, metadata, bylines

## Newspaper Typography Classes

The site includes authentic newspaper typography:

- `.newspaper-headline-alt`: Uses Tobias for article headlines
- `.newspaper-lead`: Bold lead paragraphs in articles
- `.newspaper-body`: Article body text in Tobias
- `.newspaper-byline`: Author and metadata information
- `.newspaper-kicker`: Small category labels above headlines
- `.newspaper-italic`: Elegant italic styling for emphasis

## Typography Hierarchy

- **Hero Title**: Mixed fonts - Tobias italic for "Crafting Digital", Sohne bold for "Experiences", Sohne light for "with Purpose"
- **Section Headings**: Tobias regular + Tobias italic for emphasis words
- **Article Content**: Tobias for readability and editorial feel
- **UI Elements**: Sohne for modern, clean interface

## Fallback Behavior

If Tobias files are not available, the system automatically falls back to:

1. Times New Roman (widely available)
2. Georgia (web-safe serif)
3. System serif fonts

The design will still look professional with fallback fonts, but Tobias provides the intended editorial character.

## Logo Integration (Existing Feature)

- **Projects**: LiU Tentor and MEJRA have logo paths configured
- **Experiences**: All companies have logo paths configured
- **Files Needed**: Add the actual logo files to the public/logos/ directory

## Tips

- Tobias provides excellent readability for editorial content
- The mixed font approach creates sophisticated typographic hierarchy
- Test both light and dark themes to ensure optimal readability
- The font combination balances editorial tradition with modern design
