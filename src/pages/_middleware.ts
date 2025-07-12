import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Only log in development environment
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`);
  }

  // Create response with security headers
  const response = NextResponse.next();
  
  // Add comprehensive security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Handle redirects for affiliate partners
  if (request.nextUrl.pathname.startsWith("/aliados/supervielle")) {
    return NextResponse.redirect(
      new URL(
        "https://onboardingnegocios.supervielle.com.ar/?utm_source=legalify-mail&utm_medium=off&utm_campaign=empresas_display_performance_conversiones_prospecting_null_linea-express&utm_content=linea-express_&utm_term=null&deal=legalify-mail",
        request.url
      )
    );
  }
  
  if (request.nextUrl.pathname.startsWith("/aliados/tributoSimple")) {
    return NextResponse.redirect(
      new URL("https://tributosimple.com/legalify", request.url)
    );
  }

  return response;
}

// Configure which paths this middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except static files
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
