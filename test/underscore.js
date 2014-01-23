var assert = require('assert');

var _ = require('../underscore');


assert.strictEqual(JSON.stringify(_.map(['1','2','3'], Number)), '[1,2,3]');
assert.strictEqual(JSON.stringify(_.map([1,2,3], String)), '["1","2","3"]');

assert.strictEqual(
  JSON.stringify(_.map(['a', 'b', 'c'], function(val, idx) { return idx; })),
  '[0,1,2]'
);


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
assert.strictEqual(evens.join(', '), '2, 4, 6');
  

