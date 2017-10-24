const prepack = require('prepack').prepack;
const through = require('through2');

module.exports = function (b, opts) {
  b.on('reset', addHooks);
  addHooks();

  function addHooks () {
    let code = '';
    b.pipeline.get('pack').push(through(onwrite, onend));
    function onwrite (chunk, enc, cb) {
      code += chunk;
      cb();
    }
    function onend (cb) {
      const serialized = prepack(code, opts);
      this.push(serialized.code);
      cb();
    }
  }
};
