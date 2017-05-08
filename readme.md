# prepackify
> prepack transform for browserify

# install
```sh
$ npm install prepackify
$ yarn add prepackify
```

# use
```sh
$ browserify main.js [-t,-g] prepackify
```

```js
const prepackify = require('prepackify');

const b = browserify({
  transform: [prepackify]
});
```

all opts are forwarded to [prepack](https://github.com/facebook/prepack)

# license
mit
