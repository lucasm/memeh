import { getLocaleFromParams } from '@/lib/locale-utils'

import en from '@/locales/en'
import pt_BR from '@/locales/pt-BR'
import pt_PT from '@/locales/pt-PT'

const localesMap = {
  en,
  'pt-BR': pt_BR,
  'pt-PT': pt_PT,
}

type Locale = keyof typeof localesMap

interface AboutPageProps {
  params: Promise<{ lang: string }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params
  const locale = getLocaleFromParams(lang)
  const t = localesMap[locale]

  return (
    <section className="fullscreen">
      <div className="fullscreen-container">
        <div className="container">
          <h1>Memeh</h1>
          <p>{t.description}</p>
        </div>
      </div>
    </section>
  )
}
