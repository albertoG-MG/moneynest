// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-modules')({
      generateScopedName: '[hash:base64:3]'
    })
  ],
};
