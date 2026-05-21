import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['km', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid, 
  // otherwise fallback to a default (e.g. 'en') to avoid crashes.
  const activeLocale = locales.includes(locale) ? locale : 'km';

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});
