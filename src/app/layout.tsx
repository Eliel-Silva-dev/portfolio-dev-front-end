import type { Metadata } from 'next';

import { Barlow } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FormContact from '@/components/FormContact';

import { Suspense } from 'react';

import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Portfolio Front end | Eliel Silva',
  description:
    'Pagina para apresentar os projetos desenvolvidos por Eliel Silva software Developer.',
  keywords:
    'Portfolio programador, programador, desenvolvedor, criação de sites, front end, app',
  icons: '/img/favicon_portfolio.ico',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={barlow.className}>
        <NavBar />
        <FormContact />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
