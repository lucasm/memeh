import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Memeh — Trusted news and memes',
  description: 'Breaking news headlines from trusted journalism. Be critical. Fight against misinformation.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/images/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/images/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/images/apple-touch-icon-167x167.png', sizes: '167x167' },
      { url: '/images/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Preconnect to fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
