import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Air Dream Cargo',
  description:
    'Coordenação logística e agenciamento aéreo rápido e seguro.',
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
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
          href="/images/hero-image-desktop.webp"
          media="(min-width: 1024px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-image-mobile.webp"
          media="(max-width: 1023px)"
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-0">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
