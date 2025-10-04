interface FAQSchema {
  question: string
  answer: string
}

interface JSONLDSchemaProps {
  type: 'FAQ' | 'Article' | 'Organization' | 'Calculator'
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
        "url": "https://www.irishgrants.org/logo.png"
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
    "url": "https://www.irishgrants.org",
    "logo": "https://www.irishgrants.org/logo.png",
    "sameAs": [
      "https://twitter.com/irishgrantshub",
      "https://linkedin.com/company/irishgrantshub"
    ]
  })

  const generateCalculatorSchema = (calculatorData: any) => ({
    "@context": "https://schema.org",
    "@type": "Calculator",
    "name": calculatorData.name || "EV Grant Calculator Ireland",
    "description": calculatorData.description || "Calculate your potential savings with SEAI electric vehicle grants in Ireland",
    "url": calculatorData.url || "https://www.irishgrants.org/tools/ev-grant-calculator/",
    "provider": {
      "@type": "Organization",
      "name": "Irish Grants Hub",
      "url": "https://www.irishgrants.org"
    },
    "potentialAction": {
      "@type": "CalculateAction",
      "target": calculatorData.url || "https://www.irishgrants.org/tools/ev-grant-calculator/",
      "result": {
        "@type": "QuantitativeValue",
        "unitCode": "EUR",
        "description": "Estimated EV grant amount"
      }
    }
  })

  const getSchema = () => {
    switch (type) {
      case 'FAQ':
        return generateFAQSchema(data)
      case 'Article':
        return generateArticleSchema(data)
      case 'Organization':
        return generateOrganizationSchema()
      case 'Calculator':
        return generateCalculatorSchema(data)
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
