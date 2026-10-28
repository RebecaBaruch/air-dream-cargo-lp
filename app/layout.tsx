import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { StructuredData } from '@/components/structured-data';
import {
  defaultDescription,
  defaultTitle,
  getSiteUrl,
  siteName,
} from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/images/hero-image-desktop-hq.webp',
        width: 1440,
        height: 700,
        alt: 'Air Dream Cargo — agenciamento aéreo e logística internacional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/hero-image-desktop-hq.webp'],
  },
  icons: {
    icon: [{ url: '/Ad-fav-icon.svg', type: 'image/svg+xml' }],
    shortcut: '/Ad-fav-icon.svg',
    apple: '/Ad-fav-icon.svg',
  },
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
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
