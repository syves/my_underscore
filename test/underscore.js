var assert = require('assert');

var _ = require('../underscore');


assert.strictEqual(JSON.stringify(_.map(['1','2','3'], Number)), '[1,2,3]');
assert.strictEqual(JSON.stringify(_.map([1,2,3], String)), '["1","2","3"]');

assert.strictEqual(
  JSON.stringify(_.map(['a', 'b', 'c'], function(val, idx) { return idx; })),
  '[0,1,2]'
);
