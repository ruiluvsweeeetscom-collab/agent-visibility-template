import type { Metadata } from 'next';
import './globals.css';

const title = 'Tesla Club | 中央区・港区限定のプライベートTesla Club';
const description =
  'Teslaを所有する時代から、必要な時だけ使う時代へ。中央区・港区限定、定員5名のプライベートTesla Club。';

export const metadata: Metadata = {
  metadataBase: new URL('https://tesla-club.pages.dev'),
  title,
  description,
  keywords: [
    'Tesla Club',
    'Tesla',
    'Model Y',
    'カーシェア',
    '中央区',
    '港区',
    'サブスク',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tesla Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
