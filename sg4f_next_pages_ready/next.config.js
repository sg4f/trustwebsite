/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  i18n: { locales: ['en', 'fr'], defaultLocale: 'en' }
}
module.exports = nextConfig
