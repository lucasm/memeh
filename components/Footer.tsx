'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n'
import SelectLocale from './SelectLocale'

// locales
import en from '@/locales/en'
import pt_BR from '@/locales/pt-BR'
import pt_PT from '@/locales/pt-PT'
import { IconMemeh } from '@/components/Icons'

const localesMap = {
  en,
  'pt-BR': pt_BR,
  'pt-PT': pt_PT,
}

type LocaleKey = keyof typeof localesMap

export default function Footer() {
  const locale = useLocale() as LocaleKey
  const t = localesMap[locale]

  return (
    <footer suppressHydrationWarning>
      <div className="container">
        <Link href="/" aria-label="homepage" className="logo">
          <IconMemeh/>
          Memeh
        </Link>

        <p>{t.title}</p>

        <SelectLocale />

        <p>
          {t.legal} {t.credits}{' '}
          <a href="https://lucasm.dev/?utm_source=memeh_app" target="_blank" rel="external noreferrer">
            Lucas Maués
          </a>
          .
        </p>

        <ul>
          <li>
            <a href="https://github.com/sponsors/lucasm" target="_blank" rel="external noreferrer">
              ♥ {t.donate}
            </a>
          </li>
          <li>
            <a href="https://github.com/lucasm/memeh" target="_blank" rel="external noopener noreferrer">
              {t.about}
            </a>
          </li>
          <li>
            <a href="https://lucasm.dev/legal" target="_blank" rel="external noopener noreferrer">
              {t.privacy}
            </a>
          </li>

          <li>
            <a href="mailto:feedback@memeh.app?subject=Feedback">{t.feedback}</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
