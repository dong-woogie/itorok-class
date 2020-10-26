const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const appIndex = path.resolve(__dirname, "src", "index.tsx");
const appSrc = path.resolve(__dirname, "src");
const appBuild = path.resolve(__dirname, "build");
const appPublic = path.resolve(__dirname, "public");
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";
require("dotenv").config();

function getClientEnv(nodeEnv) {
  return {
    "process.env": JSON.stringify(
      Object.keys(process.env)
        .filter((key) => /^REACT_APP/i.test(key))
        .reduce(
          (env, key) => {
            env[key] = process.env[key];
            return env;
          },
          { NODE_ENV: nodeEnv }
        )
    ),
  };
}

module.exports = (webpackEnv = "development") => {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";
  const clientEnv = getClientEnv(webpackEnv);

  return {
    mode: isEnvProduction ? "production" : "development",
    entry: appIndex,
    output: {
      path: appBuild,
      filename: isEnvProduction
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/bundle.js",
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: () => `빌드 날짜 : ${new Date().toLocaleString()}`,
      }),
      new webpack.DefinePlugin(clientEnv),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        hash: true,
        minify: isEnvProduction
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      }),
      new ManifestPlugin({
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce(
            (manifest, { name, path }) => ({ ...manifest, [name]: path }),
            seed
          );
          const entryFiles = entrypoints.main.filter(
            (filename) => !/\.map/.test(filename)
          );
          return { files: manifestFiles, entrypoints: entryFiles };
        },
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*.{ts,tsx,js,jsx}",
        },
      }),
      ...(isEnvProduction
        ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
        : []),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isEnvProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve("url-loader"),
              options: {
                limit: "10000",
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
            {
              loader: require.resolve("file-loader"),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            "cache-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({})],
    },
    devServer: {
      port: 3000,
      contentBase: appPublic,
      open: true,
      historyApiFallback: true,
      overlay: true,
      stats: "errors-warnings",
      proxy: {
        "/api": "http://localhost:5000",
      },
    },
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? "source-map"
        : false
      : isEnvDevelopment && "cheap-module-source-map",
    cache: {
      type: isEnvDevelopment ? "memory" : isEnvProduction && "filesystem",
    },
  };
};
