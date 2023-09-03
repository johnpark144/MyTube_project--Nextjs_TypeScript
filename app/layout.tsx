import '../styles/globals.css';
import Header from './Header';
import { Roboto } from '@next/font/google';
import Footer from './Footer';
import { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'MyYube',
  icons: {
    icon: {
      url: '/favicon.png',
      type: 'image/png',
    },
    shortcut: { url: '/favicon.png', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className={roboto.className}>
        <head />
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
