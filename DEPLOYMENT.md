# 🚀 Deployment Guide - Irish Grants Hub

## Vercel Deployment (Recommended)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import your repository: `martingalmarino/grantsHub`
4. Vercel will automatically detect it's a Next.js project

### Step 2: Configure Build Settings

Vercel should automatically detect these settings, but verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)
- **Root Directory**: `./` (leave empty)

### Step 3: Environment Variables (Optional)

Add these environment variables in Vercel dashboard:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `www.irishgrants.org`)
4. Follow DNS configuration instructions
5. SSL certificate will be automatically provisioned

## Build Verification

After deployment, verify these pages work:

- ✅ Home: `https://your-domain.vercel.app/`
- ✅ EV Grants: `https://your-domain.vercel.app/grants/ev/`
- ✅ SEAI EV Grant: `https://your-domain.vercel.app/grants/ev/seai-ev-grant/`
- ✅ Home Charger Grant: `https://your-domain.vercel.app/grants/ev/seai-home-charger-grant/`
- ✅ Education Grants: `https://your-domain.vercel.app/grants/education/`
- ✅ Springboard+: `https://your-domain.vercel.app/grants/education/springboard-plus-funding/`
- ✅ HCI: `https://your-domain.vercel.app/grants/education/human-capital-initiative/`
- ✅ About: `https://your-domain.vercel.app/about/`
- ✅ Grant Providers: `https://your-domain.vercel.app/about/grant-providers/`
- ✅ Contact: `https://your-domain.vercel.app/contact/`

## Performance Optimization

The site is already optimized for:
- ✅ Static generation (fast loading)
- ✅ Image optimization
- ✅ Code splitting
- ✅ SEO optimization
- ✅ Core Web Vitals

## Monitoring

Set up monitoring in Vercel:
1. Go to "Analytics" tab
2. Enable Vercel Analytics (free)
3. Monitor Core Web Vitals
4. Track page views and performance

## Updates

To update the site:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel will automatically redeploy
4. Preview deployments for pull requests

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify `next.config.js` is correct
- Check build logs in Vercel dashboard

### Styling Issues
- Ensure TailwindCSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`
- Verify PostCSS configuration

### SEO Issues
- Check that meta tags are properly set
- Verify JSON-LD schema is working
- Test with Google's Rich Results Test

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Project Issues: [GitHub Issues](https://github.com/martingalmarino/grantsHub/issues)
