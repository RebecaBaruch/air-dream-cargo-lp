export const languages = ['PT', 'US', 'ES'] as const

export type Language = (typeof languages)[number]

export const localeByLanguage: Record<Language, string> = {
  PT: 'pt-BR',
  US: 'en-US',
  ES: 'es',
}

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}
