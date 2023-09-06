import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


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
    canonical: '/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
