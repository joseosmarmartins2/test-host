const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3009/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3009,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "test_host",
      filename: "remoteEntry.js",
      remotes: {
        "LEGACY": "LEGACY@http://localhost:3000/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
        "react-redux": {
          singleton: true,
          requiredVersion: deps["react-redux"],
        },
        "redux": {
          singleton: true,
          requiredVersion: deps["redux"],
        },
        "redux-persist": {
          singleton: true,
          requiredVersion: deps["redux-persist"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    })
  ],
});
