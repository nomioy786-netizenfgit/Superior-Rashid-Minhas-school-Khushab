import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Superior Rashid Minhas School Khushab | Quality Education',
  description:
    'Superior Rashid Minhas School Khushab provides quality education, student development, modern laboratories, and a supportive learning environment for children in Khushab, Punjab, Pakistan.',
  keywords: [
    'Superior Rashid Minhas School Khushab',
    'School in Khushab',
    'Admissions Khushab 2026',
    'Best school Punjab Pakistan',
    'Matric BISE Sargodha',
    'Primary and Secondary Education Khushab',
    'Rashid Minhas School',
  ],
  authors: [{name: 'Superior Rashid Minhas School'}],
  openGraph: {
    title: 'Superior Rashid Minhas School Khushab | Quality Education',
    description:
      'Building Bright Minds, Inspiring Future Leaders. Admissions Open for Playgroup to Matriculation in Khushab, Punjab.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Superior Rashid Minhas School Khushab',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Superior Rashid Minhas School Khushab Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Superior Rashid Minhas School Khushab | Quality Education',
    description:
      'Providing quality education, character building, modern labs, and a supportive learning environment for the students of Khushab.',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Superior Rashid Minhas School Khushab',
    description:
      'Providing quality education, character development and a supportive learning environment for students of Khushab, Punjab, Pakistan.',
    telephone: '+923417885841',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Khushab',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.2967',
      longitude: '72.3525',
    },
    openingHours: 'Mo-Sa 08:00-14:00',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
