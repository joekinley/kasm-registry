/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Joekinley\'s random registry',
    description: 'Just a bunch of workspaces that I needed here and there.',
    icon: 'https://avatars.githubusercontent.com/u/1299927?v=4',
    listUrl: 'https://joekinley.github.io/kasm-registry/',
    contactUrl: 'http://joekinley.org',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
