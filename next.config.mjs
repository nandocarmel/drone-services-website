/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: ['*'],
  async rewrites() {
    return [
      { source: '/cobertura', destination: '/cobertura/index.html' },
    ];
  },
}
export default nextConfig
