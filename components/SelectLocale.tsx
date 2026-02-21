'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from '@/lib/i18n'
import en from '@/locales/en'
import ptBR from '@/locales/pt-BR'
import ptPT from '@/locales/pt-PT'

type LocaleKey = 'en' | 'pt-BR' | 'pt-PT'

const localesData: Record<LocaleKey, any> = {
  en,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
}

export default function SelectLocale() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale() as LocaleKey
  const currentLocaleData = localesData[currentLocale]

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value as LocaleKey
    const segments = pathname.split('/')
    // segments[0] is empty string before first /
    // segments[1] is current locale
    // Rest of path after locale
    const pathWithoutLocale = '/' + segments.slice(2).join('/')
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <form>
      <label>{currentLocaleData.edition}</label>
      <select onChange={changeLanguage} value={currentLocale}>
        <option value="en">International</option>
        <option value="pt-BR">Brasil</option>
        <option value="pt-PT">Portugal</option>
      </select>
    </form>
  )
}
