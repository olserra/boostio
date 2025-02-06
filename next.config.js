/** @type {import('next').NextConfig} */

module.export = {
    output: "export",
    images: {
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
  }