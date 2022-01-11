const { defineConfig } = require("@vue/cli-service");

// 模块联邦
const Mfp = require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new Mfp({
        name: "test",
        filename: "remoteEntry.js",
        // 引入的 外部模块
        remotes: {},
        // default exposes: 默认暴露路由文件给容器
        exposes: {
          "./routes": "./src/router/index.ts",
        },
        // only share dependency （TODO: automatic）
        // shared,
      }),
    ],
  },
});
