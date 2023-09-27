/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_UPLOADS_URL: process.env.NEXT_PUBLIC_UPLOADS_URL,
    NEXT_PUBLIC_BOT_LINK: process.env.NEXT_PUBLIC_BOT_LINK,
    NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_UPLOADS_URL}/uploads/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: 'api.telegram.org',
      },
      {
        hostname: 't.me',
      },
    ],
  },
};

module.exports = nextConfig;
