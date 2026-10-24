import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Air Dream Cargo',
  description:
    'Coordenação logística e agenciamento aéreo rápido e seguro.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/hero-image-desktop.avif"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/hero-image-mobile.avif"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-0">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
