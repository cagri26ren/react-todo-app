module.exports = {
  extends: '@jotforminc/eslint-config-react',
  plugins: [
    'react-hooks'
  ],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'indent': 0,
    'lines-between-class-members': 0,
    'no-else-return': 0,
    'no-multiple-empty-lines': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'prefer-object-spread': 0,
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'src/__mocks__/**/*.js',
        'src/__tests__/**/*.js',
        'src/__tests_helpers__/**/*.js'
      ]
    }],

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,

    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-access-state-in-setstate': 0,
    'react/static-property-placement': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};