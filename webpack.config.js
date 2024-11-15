const path = require("path");

module.exports = {
  entry: [__dirname + "/src/index.js", __dirname + "/src/style.scss"],
  output: {
    path: path.resolve(__dirname, ""),
    filename: "js/app.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].min.css" },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
