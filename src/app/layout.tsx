import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Bharat - Software Developer',
  description: 'Portfolio of Bharat - Software Developer Intern at Pocket FM. Full-stack developer specializing in Next.js, React, and TypeScript.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: ['Software Developer', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Bharat' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

