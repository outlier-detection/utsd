/** @type {import('next').NextConfig} */
const next_config = {
  reactStrictMode: true,
  basePath: "/utsd"
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(next_config);
