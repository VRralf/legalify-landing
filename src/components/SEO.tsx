import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Legalify - Plataforma Legal Digital',
  description = 'Simplifica tus procesos legales con Legalify. Plataforma digital para abogados y empresas.',
  image = '/legalifyogimg.jpg',
  url = 'https://legalify.app',
  type = 'website'
}) => {
  const { t } = useTranslation();

  const fullTitle = title.includes('Legalify') ? title : `${title} | Legalify`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Legalify" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Legalify" />
      <link rel="canonical" href={url} />
      
      {/* Language and locale */}
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="it_IT" />
      
      {/* Structured Data for Legal Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Legalify",
            "description": description,
            "url": url,
            "logo": `${url}/logo_legalify_azul_transparente.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+54-911-5580-1155",
              "contactType": "Customer Service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR"
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO;
