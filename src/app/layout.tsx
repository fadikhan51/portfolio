import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fadikhan51.github.io/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Fahad Khan | Full-Stack Systems Engineer & COMSATS Gold Medalist',
  description:
    'Official portfolio of Fahad Khan (Fahad Cowlar). Full-Stack Systems Engineer and COMSATS Gold Medalist specializing in high-concurrency systems, real-time IoT kinematics telemetry (100k+ events/sec), Next.js, and distributed event-driven backends.',
  keywords: [
    'Fahad',
    'Fahad Khan',
    'Fahad Cowlar',
    'full stack dev',
    'software engineer',
    'full stack software engineer',
    'systems engineer',
    'backend engineer',
    'IoT telemetry',
    'high concurrency backend',
    'FastAPI',
    'Next.js',
    'Python',
    'COMSATS gold medalist',
    'Traccar',
    'sports streaming architecture',
  ],
  authors: [{ name: 'Fahad Khan' }],
  creator: 'Fahad Khan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/assets/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/assets/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/assets/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    locale: 'en_US',
    type: 'profile',
    title: 'Fahad Khan | Full-Stack Systems Engineer',
    description:
      'Full-Stack Systems Engineer and COMSATS Gold Medalist. Building high-concurrency event-driven backends and real-time IoT telemetry pipelines.',
    url: `${siteUrl}/`,
    siteName: 'Fahad Khan Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/fahad_profile.webp`,
        width: 600,
        height: 800,
        alt: 'Fahad Khan - Full-Stack Systems Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Khan | Full-Stack Systems Engineer',
    description:
      'Full-Stack Systems Engineer and COMSATS Gold Medalist. Building high-concurrency event-driven backends and real-time IoT telemetry pipelines.',
    images: [`${siteUrl}/assets/fahad_profile.webp`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fahad Khan',
  alternateName: ['Fahad', 'Fahad Cowlar'],
  jobTitle: 'Full-Stack Systems Engineer',
  url: 'https://fadikhan51.github.io/portfolio/',
  image: 'https://fadikhan51.github.io/portfolio/assets/fahad_profile.webp',
  sameAs: [
    'https://github.com/fadikhan51',
    'https://www.linkedin.com/in/fahad-khan-13ab35249',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'COMSATS University Islamabad',
    award: 'Campus Gold Medalist',
  },
  knowsAbout: [
    'Full-Stack Software Engineering',
    'High-Concurrency Systems',
    'Real-Time IoT Telemetry',
    'Distributed Systems',
    'FastAPI',
    'PostgreSQL',
    'Redis',
    'Next.js',
    'Python',
    'TypeScript',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bricolage+Grotesque:opsz,wght@12..96,400;500;600;700;800&family=Shantell+Sans:ital,wght@0,400;0,600;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (scrollRestoration in history) {
                    history.scrollRestoration = manual;
                  }
                  window.scrollTo(0, 0);
                  var theme = localStorage.getItem(theme);
                  if (theme === dark) {
                    document.documentElement.classList.add(dark);
                  } else {
                    document.documentElement.classList.remove(dark);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="relative min-h-screen bg-[#fffefb] dark:bg-[#090c10] text-[#16110e] dark:text-[#f0ede8] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}