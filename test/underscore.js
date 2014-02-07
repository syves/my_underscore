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


// flatten
var list = [1, [2], [3, [[[4]]]]];
assert.deepEqual(_.flatten(list), [1,2,3,4], 'can flatten nested arrays');
assert.deepEqual(_.flatten(list, true), [1,2,3,[[[4]]]], 'can shallowly flatten nested arrays');
//var result = (function(){ return _.flatten(arguments); })(1, [2], [3, [[[4]]]]);
//assert.deepEqual(result, [1,2,3,4], 'works on an arguments object');
list = [[1], [2], [3], [[4]]];
assert.deepEqual(_.flatten(list, true), [1, 2, 3, [4]], 'can shallowly flatten arrays containing only other arrays');

// pluck
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');

// each
var answers = [];
_.each([1, 2, 3], function(num){ answers.push(num * 5);}, {multiplier : 5});
//console.log('answers:', answers);
assert.strictEqual(answers.join(', '), '5, 10, 15', 'context object property accessed');

//findWhere
/*
var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}, {a: 2, b: 4}];
var result = _.findWhere(list, {a: 1});
assert.deepEqual(result, {a: 1, b: 2});
var result = _.findWhere(list, {b: 4});
assert.deepEqual(result, {a: 1, b: 4});
*/
