import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_LOCALES = ['en', 'fr'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Vérifie si la locale est déjà présente
  const hasLocale = PUBLIC_LOCALES.some(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);
  
  if (!hasLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = { 
  matcher: ['/((?!api|_next|.*\\..*).*)'] 
};
