/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
  transpilePackages: ['react-daisyui'],
}

export default nextConfig
