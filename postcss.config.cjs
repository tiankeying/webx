module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px-to-viewport-8-plugin')({
      unitToConvert: 'px',
      viewportWidth: (file) => {
        // 根据文件路径判断是移动端还是PC端
        if (
          file &&
          (file.includes("mobile") ||
            file.includes("m-") ||
            file.includes("M-") ||
            file.includes("/m/") ||
            file.includes("Mobile") ||
            file.endsWith("-m.vue") ||
            file.endsWith("-mobile.vue"))
        ) {
          return 750; // 移动端设计稿宽度
        }
        return 1920; // PC端设计稿宽度
      },
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: [/node_modules/],
      replace: true,
      landscape: false,
    })
  ]
};