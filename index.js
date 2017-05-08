const prepack = require('prepack').prepack;
const path = require('path');
const through = require('through');

module.exports = function (file, opts) {
  return through(function (buf) {
    this.queue(prepack(buf.toString(), Object.assign(opts, {
      filename: path.basename(file)
    })).code);
  });
}
