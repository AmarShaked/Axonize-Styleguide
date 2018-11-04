module.exports = {
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off"
  }
};
