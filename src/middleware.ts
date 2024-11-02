import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const host = request.headers.get('host')!;
    // if session cookie is set, return rewrite to /dynamic
    const url = new URL('/dynamic', request.url);
    console.log("pathname", url.pathname);
    if (request.cookies.get('session')) {
        return NextResponse.rewrite(url)
    }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}