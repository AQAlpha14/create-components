// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Redirect www to non-www
  if (url.hostname.startsWith('www.')) {
    const newHostname = url.hostname.replace('www.', '');
    return NextResponse.redirect(
      new URL(`${url.protocol}//${newHostname}${url.pathname}${url.search}`),
      301 // Permanent redirect
    );
  }

  // Remove trailing slash
  if (url.pathname.endsWith('/') && url.pathname.length > 1) {
    const newPathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(
      new URL(`${newPathname}${url.search}`, request.url),
      301 // Permanent redirect
    );
  }

  // Continue without redirecting
  return NextResponse.next();
}

// Apply middleware to all routes except API routes, static files, and images
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};