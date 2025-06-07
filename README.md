# Echoes-In-Times



# File Naming Conventions

## Images Folder

### Portfolio Images
- `photo1.jpg` through `photo8.jpg` (main portfolio grid)
- `portrait.jpg` (about page headshot)
- `project1.jpg` through `project3.jpg` (featured projects)
- `behind1.jpg` through `behind3.jpg` (behind the scenes)

## Icons Folder
- `favicon.png` (website favicon)
- `instagram.svg` (Instagram icon)
- `linkedin.svg` (LinkedIn icon)
- `facebook.svg` (Facebook icon)
- `twitter.svg` (Twitter icon)

## Fonts Folder (if hosting locally)
- `playfair-display-regular.woff2`
- `playfair-display-700.woff2`
- `inter-regular.woff2`
- `inter-500.woff2`
- `inter-700.woff2`
- `poppins-regular.woff2`
- `poppins-500.woff2`
- `poppins-700.woff2`

Note: The current implementation uses Google Fonts through CDN links rather than locally hosted font files, so you don't actually need to download these files unless you want to host the fonts locally for performance or offline capabilities.

The filenames in the HTML/CSS code are already properly set up, so as long as you name your image files according to the pattern above (photo1.jpg, photo2.jpg, etc.), everything will work correctly.

# Recommendations for Images, Assets, and Fonts

## Images

### Portfolio Images (`/images/`)
I recommend using high-quality photography in these categories:

1. **For photo1.jpg - photo8.jpg (Portfolio Grid):**
   - Landscape photography (wide vistas, dramatic lighting)
   - Portrait photography (professional headshots)
   - Street photography (urban moments)
   - Architectural photography (interesting structures)
   - Nature/macro photography (detailed close-ups)
   - Abstract photography (patterns, textures)

2. **For portrait.jpg (About Page):**
   - Professional headshot with neutral background
   - Side profile or three-quarter view
   - Good lighting that highlights facial features

3. **For project1.jpg - project3.jpg (Featured Projects):**
   - Complete series from a single project
   - Event coverage samples
   - Client work examples

4. **For behind1.jpg - behind3.jpg (Behind the Scenes):**
   - Photos of you working on location
   - Equipment setup shots
   - Editing workspace images

### Image Sources
- **Unsplash** (unsplash.com) - Completely free, high-quality images
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free stock images
- For a professional site, consider purchasing from **Adobe Stock** or **Shutterstock**

## Assets

### Icons (`/icons/`)
- Create a simple favicon.png (32x32px) that matches your branding
- SVG social icons are already included in the HTML

### Watermark
- Simple text or small logo with 40-50% opacity
- Position in bottom right corner
- Keep it unobtrusive

## Font Recommendations

While the site already uses Playfair Display, Inter, and Poppins (excellent choices), here are some alternative professional photography-oriented fonts:

### Serif Fonts (for headings)
- **Cormorant Garamond** - Elegant, thin serifs with high contrast
- **Baskerville** - Classic, refined typography
- **Crimson Text** - Warm, readable serif
- **Lora** - Contemporary serif with balanced proportions

### Sans-Serif Fonts (for body text)
- **Source Sans Pro** - Clean, versatile sans-serif
- **Montserrat** - Modern geometric sans-serif
- **Work Sans** - Minimal, contemporary family
- **Spectral** - Designed specifically for screen reading

### Accent Fonts
- **Raleway** - Elegant sans-serif with distinctive "w"
- **Karla** - Grotesque sans-serif with character
- **DM Sans** - Low-contrast, geometric sans-serif

All these fonts are available on Google Fonts and can be implemented with the same link pattern you're using now:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Source+Sans+Pro:wght@400;600&family=Raleway:wght@500&display=swap" rel="stylesheet">
```

For a cohesive design, I recommend sticking with the fonts already specified in your CSS (Playfair Display, Inter, and Poppins) as they create an excellent typography hierarchy that suits a photography portfolio.
