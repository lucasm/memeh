'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function SetLanguage() {
  const params = useParams()

  useEffect(() => {
    const lang = params.lang as string
    if (lang) {
      document.documentElement.lang = lang
    }
  }, [params.lang])

  return null
}
