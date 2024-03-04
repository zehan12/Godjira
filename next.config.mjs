import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true
};

const millionConfig = {
  auto: true // if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
