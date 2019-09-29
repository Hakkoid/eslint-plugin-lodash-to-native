Плагин устанавливается так же как указано в задании:
    1)`npm install -S https://github.com/Hakkoid/eslint-plugin-lodash-to-native`
    2) добавить в .eslintrc.js
    ```js
        "plugins": [
            "lodash-to-native"
        ],
        "rules": {
            "lodash-to-native/map": "warn"
        },
    ```

Фикс делается в одну строку из-за того, что я не успел придумал как ставить нужно количество табов,
хотелось бы узнать как это лучше сделать. 
Если будут проблемы с установкой, то можно написть мне в телеграм - hakkoid.


# eslint-plugin-lodash-to-native

validate lodash map

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lodash-to-native`:

```
$ npm install https://github.com/Hakkoid/eslint-plugin-lodash-to-native --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lodash-to-native` globally.

## Usage

Add `lodash-to-native` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lodash-to-native"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lodash-to-native/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here



