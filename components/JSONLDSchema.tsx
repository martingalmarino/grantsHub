interface FAQSchema {
  question: string
  answer: string
}

interface JSONLDSchemaProps {
  type: 'FAQ' | 'Article' | 'Organization'
  data: any
}

export default function JSONLDSchema({ type, data }: JSONLDSchemaProps) {
  const generateFAQSchema = (faqs: FAQSchema[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })

  const generateArticleSchema = (articleData: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Organization",
      "name": "Irish Grants Hub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Irish Grants Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://irishgrantshub.ie/logo.png"
      }
    },
    "datePublished": articleData.datePublished,
    "dateModified": articleData.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleData.url
    }
  })

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Irish Grants Hub",
    "description": "Your trusted guide to understanding and applying for grants in Ireland",
    "url": "https://irishgrantshub.ie",
    "logo": "https://irishgrantshub.ie/logo.png",
    "sameAs": [
      "https://twitter.com/irishgrantshub",
      "https://linkedin.com/company/irishgrantshub"
    ]
  })

  const getSchema = () => {
    switch (type) {
      case 'FAQ':
        return generateFAQSchema(data)
      case 'Article':
        return generateArticleSchema(data)
      case 'Organization':
        return generateOrganizationSchema()
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema(), null, 2)
      }}
    />
  )
}
