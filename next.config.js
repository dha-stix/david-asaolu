/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
        pathname: '/dynamic/image/**',
      }
		],
	},
};

module.exports = nextConfig;
