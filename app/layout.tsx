import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import MobileBottomNav from '@/components/MobileBottomNav'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Puberty Awareness - Understanding Your Changes',
  description: 'A safe, educational space to learn about puberty, physical and emotional changes, and track your journey.',
  keywords: ['puberty', 'education', 'health', 'adolescence', 'wellness'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen pb-20 md:pb-0">
            {children}
          </main>
          <MobileBottomNav />
          <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-8 mt-20 mb-16 md:mb-0">
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
