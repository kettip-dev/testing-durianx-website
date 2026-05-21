import { getRequestConfig } from 'next-intl/server';

// Supported locales
const locales = ['km', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  // next-intl v4: requestLocale is a Promise, must be awaited
  let locale = await requestLocale;

  // Validate locale — fall back to 'en' if missing or unrecognized
  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
