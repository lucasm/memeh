'use client'

import { useParams } from 'next/navigation'
import CardFeed from '@/components/CardFeed/CardFeed'
import { getLocaleFromParams } from '@/lib/locale-utils'

// locales
import en from '@/locales/en'
import pt_BR from '@/locales/pt-BR'
import pt_PT from '@/locales/pt-PT'

const localesMap = {
  en,
  'pt-BR': pt_BR,
  'pt-PT': pt_PT,
}

type Locale = keyof typeof localesMap

export default function HomePage() {
  const params = useParams()
  const lang = params.lang as string

  const locale = getLocaleFromParams(lang) as Locale
  const t = localesMap[locale]

  return (
    <div className="PageLayout">
      <section id="news">
        <div className="feedSection">
          <h2>{t.news}</h2>
          <CardFeed country={t.country} category="news" />
        </div>
      </section>

      <section id="biz">
        <div className="feedSection">
          <h2>{t.biz}</h2>
          <CardFeed country={t.country} category="biz" />
        </div>
      </section>

      <section id="tech">
        <div className="feedSection">
          <h2>{t.tech}</h2>
          <CardFeed country={t.country} category="tech" />
        </div>
      </section>

      <section id="sport">
        <div className="feedSection">
          <h2>{t.sport}</h2>
          <CardFeed country={t.country} category="sport" />
        </div>
      </section>

      <section id="cult">
        <div className="feedSection">
          <h2>{t.cult}</h2>
          <CardFeed country={t.country} category="cult" />
        </div>
      </section>

      <section id="geek">
        <div className="feedSection">
          <h2>{t.geek}</h2>
          <CardFeed country={t.country} category="geek" />
        </div>
      </section>

      <section id="sci">
        <div className="feedSection">
          <h2>{t.sci}</h2>
          <CardFeed country={t.country} category="sci" />
        </div>
      </section>

      <section id="check">
        <div className="feedSection">
          <h2>{t.check}</h2>
          <CardFeed country={t.country} category="check" />
        </div>
      </section>

      <section id="dscvr">
        <div className="feedSection">
          <h2>{t.dscvr}</h2>
          <CardFeed country={t.country} category="dscvr" />
        </div>
      </section>
    </div>
  )
}
