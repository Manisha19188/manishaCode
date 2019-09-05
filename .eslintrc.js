module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: 'airbnb-base',
    globals: {
        describe: true,
        document: true,
        it: true,
        expect: true,
        window: true,
        sinon: true,
    },
    rules: {
        'no-console': [1, { allow: ['warn', 'error'] }],
        'no-debugger': 'error',
        'no-use-before-define': 0,
        'max-len': 0,
        'vue/no-unused-vars': 0,
        'indent': ['error',4],
        'no-unused-expressions': 0,
        'no-param-reassign': 0,
        'quotes': [1, 'single', { 'avoidEscape': true }],
        'import/no-extraneous-dependencies': 0
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                  ['@root', '.'],
                  ['@src', './src'],
                  ['@commands', './src/commands'],
                  ['@constants', './src/constants'],
                  ['@helpers', './src/helpers'],
                  ['@pages', './src/pages'],
                  ['@scripts', './src/scripts'],
                  ['@sections', './src/sections'],
                  ['@tests', './src/tests'],
                ],
                extensions: ['.js', '.json']
            }
        }
    }
}
