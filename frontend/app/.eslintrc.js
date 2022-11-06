module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks'],
  root: true,
  rules: {
    //  import React from 'react' のインポート文でエラー防止の為
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    //  1 行記述のメンバーのときは空行を入れなくていいようにしている
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    // ルールに抵触してしまうのを回避するのにvoid 文を記述する必要があるため、文としての使用のみを許可している
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // return文の前に常に空行を入れるよう設定している
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // ここでは変数名を _ にしたときのみ許容するように設定
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    //  インポートの際の.js、.jsx、.ts、.tsx のファイルのみ拡張子を省略し、他のファイルは拡張子 を記述させるように設定
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // eslint-config-airbnb で .jsx のみに限定されてい るので、.tsx を追加
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // JSX でコンポーネントを呼ぶときの props の記述にスプレッド構文を許さないルール。
    // <Foo {...{ bar, baz } /}>のように個々の props を明記する書き方のみ許容するように設定
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    // JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制する。
    // 新しい JSX 変換形式を用いる場合はインポートが不要になるためこの設定を無効化
    'react/react-in-jsx-scope': 'off',
    // constの場合はアロー関数で書く、functionの場合は関数式のみで書く
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
    // JSX 属性として渡された非同期関数のチェックを無効にします。
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }  
      }
    ]
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // コンポーネントの props に型チェックを行うための propTypes プロパティ 59 の定義を強制 するルール。
        // TypeScript の場合は不要なのでファイル 拡張子が .tsx の場合に無効化するよう設定を上書き
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
