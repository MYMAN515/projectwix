import type { Metadata } from 'next';
import './globals.css';
import { plusJakartaSans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Puberty Pathways | Physical & Emotional Changes',
  description:
    'Interactive learning experience supporting puberty awareness with tailored journeys, matching games, and a safe mood diary.'
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} bg-primary-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
