import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Puberty Awareness - Understanding Your Changes',
  description: 'A safe, educational space to learn about puberty, physical and emotional changes, and track your journey in English, Arabic, and Malay.',
  keywords: ['puberty', 'education', 'health', 'adolescence', 'wellness', 'البلوغ', 'akil baligh'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Puberty Awareness',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#9333EA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg font-semibold mb-2">Puberty Awareness</p>
              <p className="text-sm opacity-90">A safe space to learn and grow 🌱</p>
              <p className="text-xs mt-4 opacity-75">© 2025 - Educational Resource</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
