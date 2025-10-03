# Irish Grants Hub

A modern, SEO-friendly website providing clear guidance on Irish grants for EV adoption and education funding.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **SEO Optimized**: JSON-LD schema, meta tags, and semantic HTML
- **Accessibility**: WCAG AA compliant components
- **Performance**: Next.js with static generation
- **Modern UI**: Clean, minimalist design inspired by gov.uk and modern fintech sites

## 📋 Grant Categories Covered

### 🚗 EV Grants
- SEAI EV Grant (up to €5,000)
- SEAI Home Charger Grant (up to €600)

### 🎓 Education Grants
- Springboard+ Funding (90-100% funded)
- Human Capital Initiative (up to 100% funded)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Ready for Vercel/Netlify deployment

## 🚀 Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/martingalmarino/grantsHub.git
cd grantsHub
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build ready for deployment to Vercel or other hosting services.

## 📁 Project Structure

```
├── app/                           # Next.js App Router pages
│   ├── grants/                   # Grant guide pages
│   │   ├── ev/                  # EV grant guides
│   │   │   ├── seai-ev-grant/
│   │   │   └── seai-home-charger-grant/
│   │   └── education/           # Education grant guides
│   │       ├── springboard-plus-funding/
│   │       └── human-capital-initiative/
│   ├── about/                   # About pages
│   │   └── grant-providers/     # Grant providers information
│   ├── contact/                 # Contact page
│   └── page.tsx                 # Home page
├── components/                  # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── CTA.tsx                 # Call-to-action component
│   ├── FAQ.tsx                 # FAQ accordion
│   ├── GuideCard.tsx           # Grant guide cards
│   └── JSONLDSchema.tsx        # SEO schema component
├── public/                     # Static assets
│   ├── robots.txt
│   └── sitemap.xml
└── vercel.json                 # Vercel configuration
```

## 🔍 SEO Features

- JSON-LD structured data for FAQs and articles
- Optimized meta tags and Open Graph
- Semantic HTML structure
- Fast loading with Core Web Vitals optimization
- Mobile-first responsive design
- Sitemap and robots.txt included

## 📝 Content Updates

The site is designed to be easily updated with new grant information. Key areas to update annually:

1. **Grant amounts and eligibility** in individual guide pages
2. **Application deadlines** and processing times
3. **FAQ content** based on common user questions
4. **Official links** to government websites

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Deploy settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables (optional):**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Other Platforms

The site can also be deployed to:
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **GitHub Pages**: Use GitHub Actions with Next.js build
- **Any hosting service**: Deploy the built `.next` directory

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🔒 Security

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure headers configuration

## 📄 License

This project is for informational purposes. Always verify grant information with official government sources.

## ⚠️ Disclaimer

Irish Grants Hub is an independent informational website. We are not affiliated with SEAI, Springboard+, or any government agency. Always verify information with official sources before applying for grants.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact us through the website.

---

**Live Site**: [https://irishgrantshub.vercel.app](https://irishgrantshub.vercel.app) (after deployment)
