# County Pages Implementation Guide

## Overview
This guide explains the programmatic SEO landing pages by county that have been implemented to scale organic traffic for both EV and Education grants.

## URL Structure
- **EV Grants**: `/ireland/county-[slug]/ev-grants/`
- **Education Grants**: `/ireland/county-[slug]/education-grants/`

Where `[slug]` = county name in lowercase with hyphens (e.g., `county-dublin`, `county-cork`).

## Implemented Counties
✅ Dublin, Cork, Galway, Limerick, Kerry, Wexford, Kilkenny, Mayo, Meath

## File Structure
```
data/
  counties.json                    # Centralized county data
app/ireland/[slug]/
  ev-grants/page.tsx              # EV grants template
  education-grants/page.tsx       # Education grants template
```

## Adding New Counties

### 1. Update `data/counties.json`
Add new county objects to the array:

```json
{
  "county": "Waterford",
  "slug": "county-waterford",
  "ev_adoption_rate": "Around X% of new car registrations in 2024 were electric.",
  "top_ev_installers": [
    {
      "name": "Local Installer Name",
      "url": "https://installer-website.ie",
      "tagline": "SEAI-approved EV charger specialist"
    }
  ],
  "local_courses": [
    {
      "provider": "Waterford Institute of Technology",
      "course": "Certificate in Course Name",
      "duration": "6-12 months, delivery method"
    }
  ],
  "local_faqs": [
    {
      "question": "County-specific FAQ question?",
      "answer": "Detailed answer with local context."
    }
  ]
}
```

### 2. Update Sitemap
Add new URLs to `public/sitemap.xml`:

```xml
<!-- County EV Grants -->
<url>
  <loc>https://www.irishgrants.org/ireland/county-waterford/ev-grants/</loc>
  <lastmod>2025-01-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<!-- County Education Grants -->
<url>
  <loc>https://www.irishgrants.org/ireland/county-waterford/education-grants/</loc>
  <lastmod>2025-01-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### 3. Deploy
The pages will be automatically generated at build time. No additional code changes needed.

## Data Maintenance

### Annual Updates Required
- **EV adoption rates**: Update percentages based on latest CSO data
- **Grant amounts**: Verify current SEAI grant values
- **Local providers**: Verify SEAI approval status and contact details
- **Course offerings**: Update with current Springboard+ courses
- **FAQs**: Review and update with current information

### Verification Checklist
- [ ] SEAI installer approval status current
- [ ] College course offerings up to date
- [ ] Contact details and websites working
- [ ] Grant amounts and deadlines accurate
- [ ] Local statistics current (adoption rates, etc.)

## SEO Features

### Dynamic Metadata
- **Title**: `[County Name] EV Grants 2025 – SEAI Support & Local Installers`
- **Description**: County-specific with local context
- **Keywords**: County + grant type combinations
- **Canonical URLs**: Proper canonical structure

### Structured Data
- **FAQPage Schema**: Automatically generated from county FAQs
- **Local Business**: For SEAI-approved installers
- **Educational Organization**: For colleges and training providers

### Content Sections
1. **Hero Section**: County-specific H1 and value proposition
2. **Local Overview**: County context and adoption rates
3. **Local Providers**: SEAI installers or colleges
4. **Application Info**: National process with local support
5. **CTAs**: County-specific call-to-action buttons
6. **FAQs**: County-relevant frequently asked questions
7. **Disclaimer**: Clear independence statement

## Technical Implementation

### Static Generation
Pages are generated at build time using `generateStaticParams()`:
```typescript
export async function generateStaticParams() {
  return countiesData.map((county) => ({
    slug: county.slug,
  }))
}
```

### TypeScript Support
Full type safety with interfaces for county data structure.

### Mobile-First Design
Responsive design using TailwindCSS utilities with mobile-first approach.

### Performance Optimized
- Static generation for fast loading
- Optimized images and icons
- Core Web Vitals compliant

## Content Guidelines

### EV Grant Pages
- Focus on SEAI-approved installers
- Highlight local EV infrastructure
- Include home charger grant information
- Emphasize national grants with local support

### Education Grant Pages
- Highlight local colleges and courses
- Focus on Springboard+ and HCI programs
- Include course duration and delivery methods
- Emphasize funding percentages

### Writing Style
- Clear, accessible language
- Local context where relevant
- Action-oriented CTAs
- Accurate, up-to-date information

## Monitoring and Analytics

### Key Metrics to Track
- Organic traffic to county pages
- Conversion rates from county pages
- Search rankings for county-specific keywords
- User engagement metrics

### Search Console Monitoring
- Monitor for county-specific keyword rankings
- Track click-through rates from search results
- Identify opportunities for content expansion

## Future Enhancements

### Potential Additions
- County-specific success stories
- Local case studies
- Regional statistics and comparisons
- Integration with local business directories
- User-generated content (reviews, experiences)

### Content Expansion
- Add more detailed local provider information
- Include regional economic context
- Add seasonal content (application deadlines, etc.)
- Create county comparison tools

---

**Last Updated**: January 2025
**Next Review**: April 2025
