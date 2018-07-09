const PostCSSPresetEnv = require('postcss-preset-env');
const Tailwind = require('tailwindcss');
const Autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    PostCSSPresetEnv({ stage: 0 }),
    Tailwind('./tailwind.config.js'),
    Autoprefixer,
  ],
};
