const ROOT = __dirname;

module.exports = [
  {
    name: "server",
    entry: `${ROOT}/server/server.ts`,
    output: {
      filename: `${ROOT}/dist/server/server.ts`
    },
    target: "node",
    resolve: [".ts", ".js"],
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
  },
  {
    name: "Client",
    entry: "./src/client/scripts/client.ts",
    output: {
      filename: "./public/scripts/client.js"
    },
    resolve: ["", ".ts", ".js", ".less"],
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.less$/, loader: "style!css!less" },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
      ]
    }
  }
];