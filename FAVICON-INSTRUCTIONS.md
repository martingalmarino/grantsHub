# Favicon Generation Instructions

## Current Favicon Files

### 1. `public/icon.svg`
- **Format**: SVG (modern, scalable)
- **Design**: Green circle with white Euro symbol (€)
- **Color**: #16a34a (Irish green)
- **Size**: 32x32 viewBox

### 2. `public/favicon.ico` 
- **Status**: Placeholder file
- **Action Required**: Generate actual ICO file

## How to Generate Proper Favicon

### Option 1: Online Generator
1. Visit: https://favicon.io/favicon-generator/
2. Upload the `icon.svg` file
3. Download the generated favicon package
4. Replace `favicon.ico` with the generated file

### Option 2: Using ImageMagick
```bash
# Convert SVG to ICO
convert icon.svg -resize 32x32 favicon.ico
```

### Option 3: Using Node.js
```bash
npm install -g to-ico
to-ico icon.svg > favicon.ico
```

## Favicon Design

- **Background**: Irish green circle (#16a34a)
- **Symbol**: Euro symbol (€) in white
- **Size**: 32x32 pixels
- **Style**: Clean, professional, recognizable

## Browser Support

- **Modern browsers**: Use `icon.svg`
- **Legacy browsers**: Use `favicon.ico`
- **Apple devices**: Use `icon.svg` for Apple Touch Icon

## Files to Include

1. `favicon.ico` - 32x32 ICO file
2. `icon.svg` - SVG version (already created)
3. Apple touch icon (can use same SVG)

## Testing

After generating the favicon:
1. Clear browser cache
2. Check in browser tab
3. Test on different devices
4. Verify mobile bookmarks

---

**Note**: The SVG favicon is already working and will display in modern browsers. The ICO file is needed for older browser compatibility.
