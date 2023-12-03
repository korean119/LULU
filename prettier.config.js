/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: 'actionTypes.{js,ts}',
      options: {
        printWidth: 150,
      },
    },
  ],
};
