const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sveltePreprocess = require('svelte-preprocess');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    contentScript: path.join(__dirname, 'extension', 'contentScript.js'),
    panel: path.join(__dirname, 'src/main.ts'), //bundles the svelte application
    devtools: path.join(__dirname, 'extension', 'devtools.js'),
  },
  devtool: 'inline-source-map',
  resolve: {
    // see below for an explanation
    alias: {
      svelte: path.resolve('node_modules', 'svelte/'), // Svelte 3: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.ts', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser', 'import'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ASSET_PATH,
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'devtools.html',
      cache: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'panel.html',
      cache: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'extension/manifest.json',
          to: path.join(__dirname, 'build'),
          force: true,
          transform: function (content, path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            );
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess(),
            emitCss: false,
            hotReload: !prod,
            dev: !prod,
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
