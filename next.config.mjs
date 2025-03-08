import pkg from 'next';
const { NextConfig } = pkg;

const config = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/account123/**',
                search: '',
            },
        ],
    },
};

export default config; 