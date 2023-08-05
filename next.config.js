const withImages = require("next-images")

module.exports = withImages({
  webpack: (config) => {
    config.module.rules.push({
      test: /canvas.node$/,
      use: "ignore-loader",
    })

    return config
  },
})
