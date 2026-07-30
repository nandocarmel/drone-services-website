/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: ['*'],
  async redirects() {
    return [
      { source: '/cobertura', destination: '/cobertura/', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/cobertura/', destination: '/cobertura/index.html' },
    ];
  },
}
export default nextConfig
