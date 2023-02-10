/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		allowMiddlewareResponseBody: true,
		fontLoaders: [{ loader: '@next/font/google' }],
	},
};

module.exports = nextConfig;
