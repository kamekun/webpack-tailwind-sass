// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-variables'),
    require('postcss-minify'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}