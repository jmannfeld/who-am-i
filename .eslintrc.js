module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "wesbos",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "no-use-before-define": 0,
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "prefer-destructuring": 1
    }
};