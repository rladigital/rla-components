const path = require("path");
const webpack = require("webpack");
var fs = require("fs");
var reactExternal = {
    root: "React",
    commonjs2: "react",
    commonjs: "react",
    amd: "react"
};
var reactDOMExternal = {
    root: "ReactDOM",
    commonjs2: "react-dom",
    commonjs: "react-dom",
    amd: "react-dom"
};
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "rla-components.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd"
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
        "styled-components": "styled-components",
        "animate-css-styled-components": "animate-css-styled-components",
        react: reactExternal,
        "react-dom": reactDOMExternal
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"]
    }
};
