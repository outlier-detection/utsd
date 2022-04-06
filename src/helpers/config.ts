const env = process.env.NODE_ENV;

const config = {
  isServer: typeof window === "undefined",
  isDevelopment: env === "development",
};

export default config;
