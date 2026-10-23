import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Air Dream Cargo',
  description:
    'Coordenação logística e agenciamento aéreo rápido e seguro.',
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased text-gray-900 bg-gray-0">
        {children}
      </body>
    </html>
  );
}