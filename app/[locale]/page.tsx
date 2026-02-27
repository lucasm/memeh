import { getLocale } from 'next-intl/server'
import CardFeed from '@/components/CardFeed/CardFeed'
import SectionFeed from '@/components/SectionFeed/SectionFeed'

export default async function HomePage() {
  const locale = await getLocale()

  return (
    <div id="home">
      <SectionFeed id="news">
        <CardFeed locale={locale} category="news" />
      </SectionFeed>

      <SectionFeed id="biz">
        <CardFeed locale={locale} category="biz" />
      </SectionFeed>

      <SectionFeed id="tech">
        <CardFeed locale={locale} category="tech" />
      </SectionFeed>

      <SectionFeed id="sport">
        <CardFeed locale={locale} category="sport" />
      </SectionFeed>

      <SectionFeed id="cult">
        <CardFeed locale={locale} category="cult" />
      </SectionFeed>

      <SectionFeed id="geek">
        <CardFeed locale={locale} category="geek" />
      </SectionFeed>

      <SectionFeed id="sci">
        <CardFeed locale={locale} category="sci" />
      </SectionFeed>

      <SectionFeed id="check">
        <CardFeed locale={locale} category="check" />
      </SectionFeed>

      <SectionFeed id="dscvr">
        <CardFeed locale={locale} category="dscvr" />
      </SectionFeed>
    </div>
  )
}
