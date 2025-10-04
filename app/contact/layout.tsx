import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Irish Grants Hub - Get in Touch | Irish Grants Hub',
  description: 'Have questions about our grant information? Contact Irish Grants Hub for clarification and additional details about grant programs in Ireland.',
  keywords: 'contact Irish Grants Hub, grant questions, Irish grants help, grant information support',
  alternates: {
    canonical: 'https://www.irishgrants.org/contact/',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
