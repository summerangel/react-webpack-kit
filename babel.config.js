module.exports = function (api) {
    api.cache(true)
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    'modules': false,
                    'targets': {
                        'browsers': [
                            '> 1%',
                            'last 2 versions',
                            'not ie <= 8'
                        ]
                    }
                }
            ],
            "@babel/preset-react"
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            [
                '@babel/plugin-proposal-object-rest-spread',
                {
                    'loose': true
                }
            ], [
                '@babel/plugin-proposal-decorators',
                {
                    'legacy': true
                }
            ], [
                '@babel/plugin-proposal-class-properties',
                {
                    'loose': true
                }
            ], '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator'
        ]
    }
}