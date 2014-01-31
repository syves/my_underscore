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
  

var sum = _.reduce([1, 2, 3], function(sum, num){ return sum + num; }, 0);
assert.strictEqual(sum, 6);

var range = _.range(5, 15, 2);
assert.strictEqual(range.join(', '), '5, 7, 9, 11, 13');

var union = _.union([1, 2, 3], [2, 30, 1], [1, 40]);
assert.strictEqual(union.join(', '), '1, 2, 3, 30, 40');
