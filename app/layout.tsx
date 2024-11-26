import React, { ReactNode } from 'react';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

interface RootLayoutTypes {
  children: ReactNode,
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
