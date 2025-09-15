# ES-Lint

General Typescript ESLint Rules I use.

To use in your project:
```
yarn add git+https://github.com/adiwajshing/eslint-config
```

Then create an `eslint.config.mjs` like (can also be a yaml or js):
``` js
import config from '@adiwajshing/eslint-config'
export default [
  ...config,
  {

    files: ["src/**/*.ts"],
  }
]

```
