import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'pt-BR', 'pt-PT']
const DEFAULT_LOCALE = 'en'

function getLocaleFromRequest(request: NextRequest): string {
  // Check URL path
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return pathname.split('/')[1]
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || ''

  if (acceptLanguage.includes('pt-BR')) return 'pt-BR'
  if (acceptLanguage.includes('pt-PT')) return 'pt-PT'
  if (acceptLanguage.includes('pt')) return 'pt-BR'

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for _next, api, public files, etc
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)
  ) {
    return NextResponse.next()
  }

  // Check if locale is already in URL
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get locale and redirect
  const locale = getLocaleFromRequest(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - .well-known (well-known URIs)
     */
    '/((?!_next/static|_next/image|favicon.ico|.well-known).*)',
  ],
}
