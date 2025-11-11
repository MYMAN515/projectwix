import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Puberty Awareness - Understanding Your Changes',
  description: 'A safe, educational space to learn about puberty, physical and emotional changes, and track your journey. Available in English, Arabic, and Malay.',
  keywords: ['puberty', 'education', 'health', 'adolescence', 'wellness', 'multilingual', 'teen health'],
  manifest: '/manifest.json',
  themeColor: '#8B5CF6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Puberty Awareness'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
