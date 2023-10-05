import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Albert Paez | Portfolio',
    template: '%s | Albert Paez',
  },
  description: 'Hello, my name is Albert Paez and this is my software engineer portfolio!',
  keywords: ['My Portfolio', 'Next.js', 'Albert Paez', 'Portfolio'],
  metadataBase: new URL('https://albertpaez.com'),
  alternates: {
    canonical: 'https://albertpaez.com'
  },
  // <meta name="google-site-verification" content="S_Z2QerK8OFX3w2oeL5oEgr7iHKNgP-UmsZyCyll_dQ" />
  // googleSiteVerification: "S_Z2QerK8OFX3w2oeL5oEgr7iHKNgP-UmsZyCyll_dQ"

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <meta name="google-site-verification" content="S_Z2QerK8OFX3w2oeL5oEgr7iHKNgP-UmsZyCyll_dQ" />
       <meta property="og:image" content="swePortfolio.png"/>
      </head>
      
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
