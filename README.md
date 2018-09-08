# optional-options
A small JS helper function for dealing with callbacks and an optional options argument.

# Usage Examples
```javascript
const optOpts = require('optional-options')();

function foo(options, callback) {
  ({options, callback} = optOpts(options, callback));

  callback(options.name);
}

foo(function(output) {
  console.log(output); // undefined
});

foo({ name: 'buzz' }, function(output) {
  console.log(output); // 'buzz'
});
```

Keys can also be provided.
```javascript
const optOpts = require('optional-options')('opts', 'cb');

function foo(options, callback) {
  const { opts, cb } = optOpts(options, callback);

  cb(opts.name);
}

foo(function(output) {
  console.log(output); // undefined
});

foo({ name: 'buzz' }, function(output) {
  console.log(output); // 'buzz'
});
```
