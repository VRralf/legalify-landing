/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // GitHub Pages configuration (only for production)
  trailingSlash: true,
  basePath: isProd ? '/legalify-landing' : '',
  assetPrefix: isProd ? '/legalify-landing/' : '',
  
  reactStrictMode: true,
  
  // Disable ESLint during build for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },

  // Image optimization for static export
  images: {
    unoptimized: true,
    loader: 'custom',
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // webpack configuration
  webpack(config, { dev, isServer }) {
    // SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Bundle analyzer in development
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    return config;
  },
  
  // Experimental features (removed outputStandalone for static export)
  experimental: {
    // outputStandalone: true, // Commented out for static export
  }
};

module.exports = nextConfig;
