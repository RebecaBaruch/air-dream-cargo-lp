import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return [
    {
      url: siteUrl.origin,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/privacidade', siteUrl).href,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
