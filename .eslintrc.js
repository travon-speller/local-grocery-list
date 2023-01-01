module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'file-progress', 'prefer-arrow-functions'],
  rules: {
    'file-progress/activate': 1,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'max-len': ['error', { code: 120, ignoreRegExpLiterals: true }],
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'no-trailing-spaces': [2, { skipBlankLines: false }],
    // indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ]
  },
  settings: {
    react: {
      version: '999.999.999'
    }
  }
};
