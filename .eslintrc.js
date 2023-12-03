module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "mocha": true,
    },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "overrides": [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
