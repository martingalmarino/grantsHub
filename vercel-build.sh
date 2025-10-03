#!/bin/bash
# Vercel build script to ensure correct Next.js build

echo "Starting Vercel build process..."

# Install dependencies
npm install

# Build the project
npm run build

# Verify the build output
if [ -d ".next" ]; then
    echo "✅ Build successful - .next directory created"
    echo "📁 Contents of .next directory:"
    ls -la .next/
    
    if [ -f ".next/routes-manifest.json" ]; then
        echo "✅ routes-manifest.json found"
    else
        echo "❌ routes-manifest.json not found"
        exit 1
    fi
else
    echo "❌ Build failed - .next directory not found"
    exit 1
fi

echo "🎉 Build process completed successfully!"
