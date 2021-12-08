module.exports = {
    plugins: ['simple-import-sort'],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        indent: 'off',
        'no-console': 'error',
        'no-unused-vars': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 0,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': [
            'error',
            {
                handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
            },
        ],
    },
    globals: {
        jest: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
    },
};
