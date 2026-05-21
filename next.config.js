const withNextIntl = require('next-intl/plugin')(
  './src/i18n.js'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
}

module.exports = withNextIntl(nextConfig)
