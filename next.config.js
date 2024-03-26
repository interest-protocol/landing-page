/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dapp',
        destination: '/dapp/swap',
        permanent: true,
      },
      {
        source: '/',
        destination: '/dapp/swap',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
