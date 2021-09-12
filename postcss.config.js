// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-mixins': {},
    'postcss-nested': {},
    autoprefixer: {},
  },
};
