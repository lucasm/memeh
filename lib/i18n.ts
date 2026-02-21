'use client'

import { useParams } from 'next/navigation'
import type { Locale } from './locale-utils'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locale-utils'

export type { Locale }
export { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './locale-utils'

export function useLocale(): Locale {
  const params = useParams()
  const locale = params.lang as Locale | undefined

  if (locale && SUPPORTED_LOCALES.includes(locale)) {
    return locale
  }

  return DEFAULT_LOCALE
}

