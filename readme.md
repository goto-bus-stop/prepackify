# prepackify
> prepack plugin for browserify

# install
```sh
$ npm install prepackify
$ yarn add prepackify
```

# use
```sh
$ browserify main.js -p prepackify
```

```js
const prepackify = require('prepackify');

const b = browserify()
  .plugin(prepackify, {});
```

all opts are forwarded to [prepack](https://github.com/facebook/prepack)

# license
mit
