const path = require("path");
const webpack = require("webpack");
var fs = require("fs");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "rla-components.js",
        path: path.resolve(__dirname, "dist"),
        library: "rlaComponents"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"local"'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        //"styled-components": "styled-components",
        //"animate-css-styled-components": "animate-css-styled-components",
        // react: "React",
        // "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"]
    }
};
