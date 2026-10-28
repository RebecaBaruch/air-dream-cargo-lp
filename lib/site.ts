const DEFAULT_SITE_URL = 'https://airdreamcargo.com.br'

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL
  return new URL(raw.endsWith('/') ? raw : `${raw}/`)
}

export const siteName = 'Air Dream Cargo'

export const defaultTitle =
  'Air Dream Cargo | Agenciamento aéreo e logística internacional'

export const defaultDescription =
  'Coordenação logística e agenciamento aéreo rápido e seguro. Frete internacional, despacho aduaneiro e assessoria operacional com mais de 20 anos de experiência.'

export const contactEmail = 'contato@airdreamcargo.com.br'
export const contactPhone = '+55-11-97613-0335'
