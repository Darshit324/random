module.exports = {
    devServer: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: ["all"], // Corrected: Use an array
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8080",
          changeOrigin: true,
          pathRewrite: { "^/api": "" },
        },
      },
    },
  };
  