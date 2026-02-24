import { getTranslations } from 'next-intl/server'

export default async function AboutPage() {
  const t = await getTranslations()

  return (
    <section className="fullscreen">
      <div className="fullscreen-container">
        <div className="container">
          <h1>Aspiral</h1>
          <p>{t('description')}</p>
        </div>
      </div>
    </section>
  )
}
