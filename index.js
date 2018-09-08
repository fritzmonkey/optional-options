'use strict';

module.exports = function(optsKey = 'options', cbKey = 'callback') {
  return function(opts, cb) {
    if (typeof opts === 'function' && !cb) {
      cb = opts;
      opts = {};
    }

    return {
      [optsKey]: opts,
      [cbKey]: cb
    };
  }
};
