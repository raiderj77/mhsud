import { NextRequest, NextResponse } from 'next/server'
import { isSensitiveRoute } from '@/lib/routePolicies'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  if (isSensitiveRoute(request.nextUrl.pathname)) {
    response.headers.set('Cache-Control', 'private, no-store, max-age=0, must-revalidate')
    response.headers.set('CDN-Cache-Control', 'no-store')
    response.headers.set('Vercel-CDN-Cache-Control', 'no-store')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('Referrer-Policy', 'no-referrer')
    response.headers.set('X-Robots-Tag', 'noarchive')
  }
  const gpc = request.headers.get('sec-gpc') === '1'
  if (gpc) {
    // The browser-side analytics gate reads this first-party value so a GPC
    // signal observed by middleware keeps Vercel Web Analytics suppressed.
    // httpOnly: false is intentional; there is no consent-banner dependency.
    response.cookies.set('empire_gpc', '1', {
      httpOnly: false,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    })
  }
  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
