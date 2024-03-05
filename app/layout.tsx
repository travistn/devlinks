import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';

import './globals.css';

const instrument_sans = Instrument_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'devlinks',
  description: 'App created by Travis Nguyen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={instrument_sans.className}>{children}</body>
    </html>
  );
}
