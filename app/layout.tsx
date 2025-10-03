import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://irishgrantshub.ie'),
  title: 'Irish Grants Hub - Your Guide to EV & Education Grants in Ireland',
  description: 'Clear, trustworthy guidance for Irish residents to understand and apply for national grants including SEAI EV grants, Springboard+ funding, and HCI programs.',
  keywords: 'Ireland grants, SEAI EV grant, Springboard+, HCI funding, Irish education grants, electric vehicle grants Ireland',
  authors: [{ name: 'Irish Grants Hub' }],
  openGraph: {
    title: 'Irish Grants Hub - Your Guide to EV & Education Grants',
    description: 'Clear, trustworthy guidance for Irish residents to understand and apply for national grants.',
    type: 'website',
    locale: 'en_IE',
    url: 'https://irishgrantshub.ie',
    siteName: 'Irish Grants Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irish Grants Hub - Your Guide to EV & Education Grants',
    description: 'Clear, trustworthy guidance for Irish residents to understand and apply for national grants.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://irishgrantshub.ie',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
