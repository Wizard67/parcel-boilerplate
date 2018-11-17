module.exports = {
  "modules": false,
  "plugins": {
    "autoprefixer": {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 1
    }
  }
}
