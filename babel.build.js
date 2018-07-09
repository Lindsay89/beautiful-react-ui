module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  ignore: [
    'src/**/*.spec.js',
    'src/**/*.test.js',
  ],
  comments: false,
  plugins: [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: [
          '.less',
          '.sass',
          '.scss',
          '.css',
        ],
      },
    ],
  ],
};
