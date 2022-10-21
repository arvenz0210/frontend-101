/** @type {import('next').NextConfig} */
const withTranspile = require("next-transpile-modules")([
  "@pomelo-la/paradis",
  "@pomelo-la/dashboard-vulcan",
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTranspile(nextConfig);
