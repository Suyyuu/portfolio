/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
      },
    output: 'export',
    typescript: {
      ignoreBuildErrors: true,
    }
};

export default nextConfig;
