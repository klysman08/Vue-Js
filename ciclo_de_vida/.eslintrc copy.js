module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-tabs': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'tab-width': 4,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
};
