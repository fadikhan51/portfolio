import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fahadkhan.is-a.dev';
const siteUrl = rawSiteUrl.includes(basePath) || !basePath
  ? rawSiteUrl.replace(/\/$/, '')
  : `${rawSiteUrl.replace(/\/$/, '')}${basePath}`;

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
    type: 'website',
    title: 'Fahad Khan | Full-Stack Systems Engineer',
    description:
      'Full-Stack Systems Engineer and COMSATS Gold Medalist. Building high-concurrency event-driven backends and real-time IoT telemetry pipelines.',
    url: `${siteUrl}/`,
    siteName: 'Fahad Khan Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/linkedin_featured_light.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Fahad Khan - Full-Stack Systems Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahad Khan | Full-Stack Systems Engineer',
    description:
      'Full-Stack Systems Engineer and COMSATS Gold Medalist. Building high-concurrency event-driven backends and real-time IoT telemetry pipelines.',
    images: [`${siteUrl}/assets/linkedin_featured_light.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Fahad Khan',
      alternateName: ['Fahad', 'Fahad Cowlar', 'Fahad Systems Engineer', 'Fahad Khan Engineer'],
      url: `${siteUrl}/`,
      image: `${siteUrl}/assets/fahad_profile.webp`,
      jobTitle: 'Full-Stack Systems Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Independent Engineering Consultant',
      },
      sameAs: [
        'https://github.com/fadikhan51',
        'https://www.linkedin.com/in/fahad-khan-13ab35249',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'COMSATS University Islamabad',
        award: 'Gold Medalist (BSCS 3.82 CGPA), Bronze Medalist',
      },
      knowsAbout: [
        'Full Stack Development',
        'Software Engineering',
        'High-Concurrency Systems',
        'IoT Telemetry',
        'FastAPI',
        'Next.js',
        'PostgreSQL',
        'Distributed Systems',
        'Event-Driven Architecture',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Fahad Khan Portfolio',
      description: 'Official engineering portfolio of Fahad Khan',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
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
                  if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                  }
                  if (!window.location.hash) {
                    window.scrollTo(0, 0);
                  }
                  var saved = localStorage.getItem('fahad_theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-[#16110e] dark:text-[#f4f4f5] bg-[#fffefb] dark:bg-[#090b0e] transition-colors duration-300 relative selection:bg-[#ff595e]/20 selection:text-[#ff595e]">
        {children}
      </body>
    </html>
  );
}
