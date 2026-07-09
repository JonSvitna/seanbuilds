const { withMicrofrontends } = require('@vercel/microfrontends/next/config')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withMicrofrontends(nextConfig)
