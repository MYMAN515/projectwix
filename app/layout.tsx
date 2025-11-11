import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Puberty Awareness - Understanding Your Changes',
  description: 'A safe, educational space to learn about puberty, physical and emotional changes, and track your journey.',
  keywords: ['puberty', 'education', 'health', 'adolescence', 'wellness'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  )
}
