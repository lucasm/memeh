import { getTranslations, getLocale } from 'next-intl/server'
import CardFeed from '@/components/CardFeed/CardFeed'

export default async function HomePage() {
  const t = await getTranslations()
  const locale = await getLocale()

  return (
    <div className="PageLayout" id="home">
      <section id="news">
        <div className="feedSection">
          <h2>{t('news')}</h2>
          <CardFeed locale={locale} category="news" />
        </div>
      </section>

      <section id="biz">
        <div className="feedSection">
          <h2>{t('biz')}</h2>
          <CardFeed locale={locale} category="biz" />
        </div>
      </section>

      <section id="tech">
        <div className="feedSection">
          <h2>{t('tech')}</h2>
          <CardFeed locale={locale} category="tech" />
        </div>
      </section>

      <section id="sport">
        <div className="feedSection">
          <h2>{t('sport')}</h2>
          <CardFeed locale={locale} category="sport" />
        </div>
      </section>

      <section id="cult">
        <div className="feedSection">
          <h2>{t('cult')}</h2>
          <CardFeed locale={locale} category="cult" />
        </div>
      </section>

      <section id="geek">
        <div className="feedSection">
          <h2>{t('geek')}</h2>
          <CardFeed locale={locale} category="geek" />
        </div>
      </section>

      <section id="sci">
        <div className="feedSection">
          <h2>{t('sci')}</h2>
          <CardFeed locale={locale} category="sci" />
        </div>
      </section>

      <section id="check">
        <div className="feedSection">
          <h2>{t('check')}</h2>
          <CardFeed locale={locale} category="check" />
        </div>
      </section>

      <section id="dscvr">
        <div className="feedSection">
          <h2>{t('dscvr')}</h2>
          <CardFeed locale={locale} category="dscvr" />
        </div>
      </section>
    </div>
  )
}
