/** @type {import('next').NextConfig} */

const nextConfig = {
    //reactStrictMode: true,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
    },

    trailingSlash: true,
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         issuer: {
    //             test: /\.(js|ts)x?$/,
    //         },
    //         use: ['@svgr/webpack'],
    //     });

    //     return config;
    // },
};

module.exports = nextConfig;
