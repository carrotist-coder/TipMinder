const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const repoName = 'TipMinder';
  const isGitHubPages =
    isProduction && process.env.DECOY_DEST === 'github_pages';
  const publicUrl = isGitHubPages ? `/${repoName}` : '';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval-cheap-module-source-map',
    entry: './src/app/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      clean: true,
      publicPath: isGitHubPages ? `/${repoName}/` : '/',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@app': path.resolve(__dirname, 'src/app/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@widgets': path.resolve(__dirname, 'src/widgets/'),
        '@features': path.resolve(__dirname, 'src/features/'),
        '@entities': path.resolve(__dirname, 'src/entities/'),
        '@shared': path.resolve(__dirname, 'src/shared/'),
      },
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-react',
                  {
                    development: !isProduction,
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  auto: true,
                  namedExport: false,
                  exportLocalsConvention: 'asIs',
                  localIdentName: isProduction
                    ? '[hash:base64:8]'
                    : '[name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          PUBLIC_URL: publicUrl,
        },
      }),
      new ESLintPlugin({ extensions: ['js', 'jsx'] }),
      new MiniCssExtractPlugin({
        filename: isProduction
          ? 'css/[name].[contenthash:8].css'
          : 'css/[name].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public/assets'),
            to: path.resolve(__dirname, 'dist/assets'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'public/404.html'),
            to: path.resolve(__dirname, 'dist/404.html'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'public/robots.txt'),
            to: path.resolve(__dirname, 'dist/robots.txt'),
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devServer: {
      port: 3000,
      hot: !isProduction,
      open: true,
      historyApiFallback: true,
      headers: {
        'Cache-Control': isProduction
          ? 'public, max-age=31536000, immutable'
          : 'no-store',
      },
    },
  };
};
