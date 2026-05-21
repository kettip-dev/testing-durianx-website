import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - API routes
    // - Static files (_next, images, favicon.ico, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within the [locale] segment
    '/',
    '/(km|en)/:path*'
  ]
};
