import { messages } from '@/lib/i18n/messages'
import {
  contactEmail,
  contactPhone,
  defaultDescription,
  getSiteUrl,
  siteName,
} from '@/lib/site'

export function buildStructuredDataGraph() {
  const siteUrl = getSiteUrl()
  const origin = siteUrl.origin
  const faq = messages.PT.faq.items

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: siteName,
        url: origin,
        email: contactEmail,
        telephone: contactPhone,
        logo: `${origin}/adc-logo.svg`,
        sameAs: [
          'https://instagram.com/airdreamcargo',
          'https://linkedin.com/AirDreamCargo',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${origin}/#localbusiness`,
        name: siteName,
        description: defaultDescription,
        url: origin,
        email: contactEmail,
        telephone: contactPhone,
        image: `${origin}/images/hero-image-desktop-hq.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Avenida Profa Ida Kolb 225, Apt 153',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          postalCode: '02518-000',
          addressCountry: 'BR',
        },
        parentOrganization: { '@id': `${origin}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: siteName,
        description: defaultDescription,
        publisher: { '@id': `${origin}/#organization` },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'FAQPage',
        '@id': `${origin}/#faq`,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }
}
