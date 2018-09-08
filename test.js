const assume = require('assume');
const optionalOpts = require('./index');

describe('optional-options', function() {
  let optOpts;

  beforeEach(function() {
    optOpts = optionalOpts();
  });

  it('returns a function', function() {
    assume(optOpts).is.a('function');
  });

  it('returns options and callback if they are both passed in', function() {
    const opts = {};
    const cb = function() {};  
    const result = optOpts(opts, cb);

    assume(result.options).equals(opts);
    assume(result.callback).equals(cb);
  });

  it('returns the callback if it is the only thing passed in', function() {
    const cb = function() {};  
    const result = optOpts(cb);

    assume(result.options).eqls({});
    assume(result.callback).equals(cb);
  });

  it('allows the options key to be set', function() {
    optOpts = optionalOpts('opts');

    const opts = {};
    const cb = function() {};  
    const result = optOpts(opts, cb);

    assume(result.opts).equals(opts);
    assume(result.callback).equals(cb);
  });

  it('allows the callback key to be set', function() {
    optOpts = optionalOpts('options', 'next');

    const opts = {};
    const cb = function() {};  
    const result = optOpts(opts, cb);

    assume(result.options).equals(opts);
    assume(result.next).equals(cb);
  });
});