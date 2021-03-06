const path = require("path");

module.exports = {
  source: "example",
  exclude: [/node_modules/, /dist/],
  resolve: {
    alias: {
      "@": path.relative(__dirname, "./example"),
      "@source": path.relative(__dirname, "./src/"),
      "@library": path.relative(__dirname, "./dist/")
    }
  }
};