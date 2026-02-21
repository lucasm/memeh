import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SetLanguage from '@/components/SetLanguage'
import { getLocaleFromParams } from '@/lib/locale-utils'
import type { Locale } from '@/lib/locale-utils'

// locales
import en from '@/locales/en'
import pt_BR from '@/locales/pt-BR'
import pt_PT from '@/locales/pt-PT'

const localesMap = {
  en,
  'pt-BR': pt_BR,
  'pt-PT': pt_PT,
}

interface LangLayoutProps {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params
  const locale = getLocaleFromParams(lang) as keyof typeof localesMap
  const t = localesMap[locale]

  const langMap: Record<Locale, string> = {
    en: 'en',
    'pt-BR': 'pt-BR',
    'pt-PT': 'pt-PT',
  }

  return {
    title: t.title,
    description: t.description,
    keywords: ['news', 'headlines', 'feeds', 'rss', 'memeh', 'journalism', 'fact-checking'],
    authors: [{ name: 'Lucas Menezes', url: 'https://lucasm.dev?utm_source=memeh_app' }],
    creator: 'Lucas Menezes',
    applicationName: 'Memeh',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Memeh',
      startupImage: '/images/icon-192x192.png',
    },
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      locale: langMap[locale],
      url: `https://memeh.app/${locale}`,
      siteName: 'Memeh',
      title: t.title,
      description: t.description,
      images: [
        {
          url: 'https://memeh.app/images/memeh-share.png',
          width: 1200,
          height: 630,
          alt: 'Memeh',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['https://memeh.app/images/memeh-share.png'],
      creator: '@lucasm',
    },
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt-BR' }, { lang: 'pt-PT' }]
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params

  return (
    <>
      <SetLanguage />
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Clarity Analytics */}
      <Script
        id="MS-CLARITY"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "5d4q9fkiga");
          `,
        }}
      />

      {/* Google Analytics */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-89JR74CJC7" />
      <Script
        id="G-ANALYTICS"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-89JR74CJC7');
          `,
        }}
      />
    </>
  )
}

