/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
};

module.exports = withContentlayer({ ...nextConfig });
