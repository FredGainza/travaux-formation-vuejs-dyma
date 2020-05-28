module.exports = {
    productionSourceMap: false,
    devServer: {
      proxy: "http://localhost:3100"
    },
    outputDir: "../client-build"
  };