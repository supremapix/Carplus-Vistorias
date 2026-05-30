import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'business';
  imageUrl?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

export default function EnhancedSEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  imageUrl = 'https://img.carplusvistorias.com.br/vistorias-pr.png',
  structuredData
}: EnhancedSEOProps) {

  // Active registration of the Service Worker directly within the client lifecycle
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('Carplus Service Worker registered successfully:', registration.scope);
          })
          .catch((error) => {
            console.error('Carplus Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <Helmet>
      {/* 1. Basic Title & Meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* 2. Resource Hints (Preload, Preconnect, DNS-Prefetch) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://img.carplusvistorias.com.br" />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com animate.css" />
      
      {/* 3. Open Graph (OG) Social Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Carplus Vistorias" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/* 4. Twitter Card Social Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* 5. Geographic Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4660;-49.2890" />
      <meta name="ICBM" content="-25.4660, -49.2890" />

      {/* 6. Font Optimization Critical Preload */}
      <link 
        rel="preload" 
        as="style" 
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600;700;800&display=swap" 
      />

      {/* 7. Critical CSS Injection - ensures instant visual paint for primary blocks */}
      <style type="text/css">{`
        body {
          margin: 0;
          font-family: 'Source Sans 3', sans-serif;
          background-color: #09090b;
        }
        .hero-laser-line {
          height: 2px;
          background: linear-gradient(90deg, rgba(245,166,35,0) 0%, rgba(245,166,35,1) 50%, rgba(245,166,35,0) 100%);
          box-shadow: 0 0 8px #F5A623;
        }
        .reveal {
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* 8. Full Dynamic Structured Data Injected into index.html DOM */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
