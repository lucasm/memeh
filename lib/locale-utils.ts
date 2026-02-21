export type Locale = 'en' | 'pt-BR' | 'pt-PT'

export const SUPPORTED_LOCALES: Locale[] = ['en', 'pt-BR', 'pt-PT']
export const DEFAULT_LOCALE: Locale = 'en'

export function getLocaleFromParams(lang: unknown): Locale {
  if (typeof lang === 'string' && SUPPORTED_LOCALES.includes(lang as Locale)) {
    return lang as Locale
  }
  return DEFAULT_LOCALE
}
