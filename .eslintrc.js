module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'import'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 9,
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    project: './tsconfig.json',
    createDefaultProgram: true,
  },

  env: {
    'react-native/react-native': true,
    jest: true,
    node: true,
    jasmine: true,
    commonjs: true,
    es6: true,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root/>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: 'tsconfig.json',
      },
    },
  },

  globals: {
    detoxCircus: false,
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Load devDependencies only on test files
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'log'] }],
    'import/no-cycle': ['off', { maxDepth: 10 }],
    // disable the rule for variables, but enable it for functions and classes
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false },
    ],
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    curly: ['error', 'multi'],
    'no-shadow': 'off',
    // FIXME: Fix this
    '@typescript-eslint/no-shadow': [
      'off',
      {
        builtinGlobals: true,
        hoist: 'never',
        allow: ['resolve', 'reject', 'done', 'cb'],
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['warn'],
    'no-unused-vars': 'off',
    // Warn on unused variables
    '@typescript-eslint/no-unused-vars': 'off',
    // allows props spreading
    'react/jsx-props-no-spreading': 'off',
    // disallow dangling underscores in identifiers except on MongoDB _id
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    // Allow at minimum of 2 classes per file
    'max-classes-per-file': ['error', 2],
    '@typescript-eslint/no-implied-eval': 'warn',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-wrap-multilines': [0, [{ prop: 'parens' }]],
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-curly-newline': 'off',
    'no-continue': 'warn',
    'no-lone-blocks': 'warn',
    'no-plusplus': 'off',
    'react/prop-types': 'warn',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
    'react/jsx-indent': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
      },
    ],
    radix: ['error', 'as-needed'],
  },
};
