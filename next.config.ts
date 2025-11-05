import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';
// const basePath = isProd ? '/la-roche-triple' : '';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: basePath || undefined,
  // assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: basePath,
  // },
};

export default nextConfig;
