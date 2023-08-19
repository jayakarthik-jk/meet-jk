/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  tabWidth: 2,
  parser: 'typescript'
}

module.exports = config
