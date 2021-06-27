module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/self-closing-comp": [
      "off",
      {
        component: true,
        html: true,
      },
    ],
    "react/prop-types": 0,
    "no-use-before-define": "off",
    "no-console": "off",
    "no-undef": "warn",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "no-nested-ternary": "off",
  },
};
