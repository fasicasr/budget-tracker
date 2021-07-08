const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');

console.log("HII")

const config = {
  entry: {
    app: './public/assets/js/index.js',
    // favorites: './assets/js/favorites.js',
    // topic: './assets/js/topic.js',
  },
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: 'Budget Tracker',
      short_name: 'Budget Tracker',
      description: 'A budget tracking app that runs offline',
      background_color: "#01579b",
      theme_color: "#ffffff",
      // 'theme-color': '#36465d;',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: path.resolve(__dirname, 'public/assets/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
};

console.log(config)

module.exports = config;
