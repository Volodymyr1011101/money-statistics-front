import pkg from 'eslint';

const { ESLint } = pkg;

export default {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'eslint-config-airbnb',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
    ],
    rules: {
        'quotes': ['error', 'single'], // Использование одинарных кавычек
        'semi': ['error', 'always'], // Точка с запятой в конце строки
        'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
        'no-let': ['error', { 'allowConst': false }], // Ошибка при использовании let, если переменная не изменяется
        'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Игнорирование неиспользуемых переменных, начинающихся с _
        'import/newline-after-import': ['error', { 'count': 1 }], // Пустая строка после импортов
    },
};
