import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_LOCALES = ['en','fr']

export function middleware(req: NextRequest){
  const { pathname } = req.nextUrl
  const isMissingLocale = PUBLIC_LOCALES.every(l => !pathname.startsWith(`/${l}/`))
  if (isMissingLocale){
    const url = req.nextUrl.clone()
    url.pathname = `/en${pathname}`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/((?!api|_next|.*\..*).*)'] }
