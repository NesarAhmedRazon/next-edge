/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  runtime: 'edge',
  images: {
    domains: [
      "www.facebook.com",
      "secure.gravatar.com",
      "web-cms.tallyfy.com",
      "i.ytimg.com",
      "tallyfy.com",
      "localhost"
    ]
  }
};

module.exports = nextConfig;
