# How to Add Images to Your Echoxis Geo Website

Your website is fully structured to display images. Here's how to add them:

## Quick Start

1. **Navigate to the `images/` folder** in your website directory
2. **Download or create images** matching the filenames below
3. **Place them in the `images/` folder**
4. **Refresh your browser** - images will appear automatically

## Image Files Needed

### Priority 1 (Essential for Impact):
- `surveying-hero.jpg` - Main hero background
- `land-survey.jpg` - Land surveying card
- `hydrographic-survey.jpg` - Hydrographic surveying card
- `about-company.jpg` - About page company image

### Priority 2 (Complete Core Sections):
- `drone-lidar.jpg` - Drone/LiDAR services
- `quality-analysis.jpg` - Quality assurance
- `infrastructure-construction.jpg` - Industries section
- `ports-coastal.jpg` - Ports & coastal industries

### Optional (Nice to Have):
- Deliverable images (terrain models, contours, etc.)
- Service detail images (land survey detail, etc.)
- Other industry images

## Where to Find Free Images

### Best Sources for Geospatial/Survey Content:

**Unsplash** (unsplash.com)
- Search: "surveying equipment", "drone surveying", "land survey", "construction site"
- High quality, truly free, no attribution required
- Perfect for professional websites

**Pexels** (pexels.com)
- Search: "surveying", "construction", "mapping", "engineering"
- Free stock photos
- Good variety of geospatial-related content

**Pixabay** (pixabay.com)
- Search: "surveying", "GIS", "mapping", "drone", "topography"
- Large collection of free images
- Can filter by image type

**Librestock** (librestock.com)
- Aggregates free photos from multiple sources

### Specific Image Search Tips:

**For Land Surveying:**
- "surveyor" + "equipment"
- "land survey" + "equipment"
- "surveying" + "field"
- "GPS surveying"
- "theodolite"

**For Hydrographic/Marine:**
- "hydrographic survey"
- "surveying" + "vessel" or "boat"
- "ocean" + "survey"
- "bathymetric"
- "coastal engineering"

**For Drones/LiDAR:**
- "drone surveying"
- "aerial surveying"
- "LiDAR"
- "drone photography"

**For Geospatial/GIS:**
- "GIS mapping"
- "geospatial"
- "terrain model"
- "3D topography"
- "digital mapping"

## How to Download Images

1. **Find an image** you like on Unsplash/Pexels/Pixabay
2. **Click the image** to view full size
3. **Click "Download"** button
4. **Rename the file** to match the filename needed (e.g., `land-survey.jpg`)
5. **Move the file** to your `images/` folder

## Image Specifications

| Image | Recommended Size | Aspect Ratio | Max File Size |
|-------|-----------------|--------------|---------------|
| Hero Image | 1200 x 400px | 3:1 | 200KB |
| Service Card | 400 x 200px | 2:1 | 80KB |
| Deliverable Card | 400 x 150px | 8:3 | 60KB |
| Service Detail | 1200 x 300px | 4:1 | 150KB |
| Industry Card | 1200 x 250px | 4.8:1 | 120KB |
| About Image | 600 x 350px | 1.7:1 | 100KB |

## Image Optimization

To keep your website fast:

1. **Compress images** using:
   - TinyPNG (tinypng.com)
   - Compressor.io
   - ImageOptim (Mac)
   - Online tools

2. **Use JPG for photographs** (smaller file size)
3. **Use PNG for graphics/screenshots** (if needed)
4. **Target file sizes**:
   - Hero: 150-250KB
   - Cards: 50-100KB
   - Detail images: 100-150KB

## Alternative: Using External URLs

If you prefer NOT to store images locally, you can edit the HTML files and use URLs directly:

**In the HTML file**, change:
```html
<img src="images/land-survey.jpg" alt="Land survey equipment">
```

To:
```html
<img src="https://images.unsplash.com/photo-XXXXX" alt="Land survey equipment">
```

(Get the full URL from Unsplash when you download)

## Testing Your Images

1. Open `index.html` in a web browser
2. Scroll through and verify images appear
3. Check on different screen sizes (mobile, tablet, desktop)
4. Use browser DevTools to check for broken images (F12 → Console tab)

## Troubleshooting

**Images not showing?**
- Check filenames match exactly (case-sensitive on some systems)
- Verify files are in the `images/` folder
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for 404 errors

**Images look blurry?**
- Ensure source image is high resolution
- Check file isn't heavily compressed

**Page loads slowly?**
- Compress images further
- Use JPG format
- Reduce image dimensions if not using full width

## Professional Touch

For best visual impact:
- **Use consistent style**: Similar color tones and lighting
- **Show action**: Surveyors working, equipment in use
- **Include people**: Builds connection and credibility
- **Show results**: Display final deliverables (models, maps, etc.)
- **Vary composition**: Mix wide shots, details, close-ups

## Next Steps

1. Choose your priority images (start with Hero + 3-4 service cards)
2. Download from free sources
3. Optimize file sizes
4. Place in images/ folder
5. Refresh browser
6. Repeat with remaining images

Your website will automatically style and display them perfectly!
