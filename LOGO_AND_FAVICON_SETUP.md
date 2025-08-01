# Logo and Favicon Setup Guide

## Logo Setup

To add your custom logo to the header:

1. **Place your logo file** in the `public` folder of your project
2. **Supported formats**: PNG, JPG, JPEG
3. **Recommended size**: 40x40 pixels (minimum) to 80x80 pixels (maximum)
4. **File naming**: Use `logo.png` or `logo.jpg`

### Steps:
1. Add your logo file to: `public/logo.png` (or .jpg)
2. The header will automatically display your logo
3. If the logo fails to load, it will fallback to a text "K"

### Example:
```
public/
├── logo.png          # Your logo file
├── favicon.png       # Your favicon
└── ...
```

## Favicon Setup

To add your custom favicon:

1. **Place your favicon file** in the `public` folder
2. **Supported formats**: PNG, JPG, JPEG
3. **Recommended size**: 32x32 pixels or 16x16 pixels
4. **File naming**: Use `favicon.png`, `favicon.jpg`, or `favicon.jpeg`

### Steps:
1. Add your favicon file to: `public/favicon.png` (or .jpg/.jpeg)
2. The browser will automatically use your favicon
3. If PNG/JPG not available, it falls back to the default SVG

### Example:
```
public/
├── logo.png
├── favicon.png       # Your favicon file
└── ...
```

## File Structure

Your `public` folder should look like this:

```
public/
├── logo.png          # Header logo (40x40 to 80x80 px)
├── favicon.png       # Browser favicon (32x32 px)
├── vite.svg          # Default favicon (fallback)
└── ...               # Other public assets
```

## Notes

- The logo supports fallback to text if the image fails to load
- The favicon supports multiple formats with fallback
- All images should be optimized for web use
- PNG format is recommended for better quality with transparency support 