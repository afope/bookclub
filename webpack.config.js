const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, args) {
  const base = {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
      modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
    },
    output: {
      filename: 'client.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      })
    ],
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    mode: 'development'
  };

  // server-specific configuration
  if (env.platform === 'server') {
    base.target = 'node';
    base.entry = './src/server/index.ts';
    base.output.filename = 'server.js';
    base.output.path = path.resolve(process.cwd(), 'dist');
    base.output.publicPath = '/';
  }

  if (env.platform === 'web') {
    base.entry = './src/index.tsx';
    base.output.filename = 'client.js';
  }

  return base;
};
