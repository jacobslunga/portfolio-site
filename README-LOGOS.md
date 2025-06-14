# Logo Integration Guide

## Overview

The portfolio now supports optional logos for both projects and experiences. Logos will display when available, with automatic fallback to the original icons if logos are missing or fail to load.

## Directory Structure

Create a `public/logos/` directory and add your logo files there:

```
public/
├── logos/
│   ├── liu-tentor.png      # LiU Tentor project logo
│   ├── mejra.png           # MEJRA project logo
│   ├── gotstyle.png        # GotStyle project logo (optional)
│   ├── axis.png            # Axis Communications logo
│   ├── liu.png             # Linköping University logo
│   ├── dyno.png            # Dyno Robotics logo
│   └── skill.png           # Skill company logo
└── ...
```

## Logo Requirements

- **Format**: PNG or SVG recommended
- **Size**: Any size (they'll be automatically scaled)
- **Background**: Transparent or white background works best
- **Quality**: High resolution for crisp display

## How It Works

1. **With Logo**: If a logo file exists and loads successfully, it displays in place of the icon
2. **Without Logo**: If no logo is specified or the file fails to load, the original icon displays
3. **Automatic Fallback**: If a logo fails to load, the system automatically falls back to the icon

## Adding New Logos

To add logos for your projects or experiences:

1. Add the logo file to `public/logos/`
2. Update the data in `src/pages/HomePage.tsx`:
   - For projects: Add `logo: "/logos/filename.png"` to the project object
   - For experiences: Add `logo: "/logos/filename.png"` to the experience object
3. The logo will automatically display when the page loads

## Current Status

- **Projects**: LiU Tentor and MEJRA have logo paths configured
- **Experiences**: All companies have logo paths configured
- **Files Needed**: Add the actual logo files to the public/logos/ directory

## Tips

- Use company brand assets when available
- Keep file sizes reasonable (under 100KB recommended)
- Test both light and dark themes to ensure logos look good
- Consider using SVG files for scalability
