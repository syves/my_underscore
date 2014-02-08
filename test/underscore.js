var assert = require('assert');

var _ = require('../underscore');


describe('map', function() {

  it('transforms an array using the provided function', function() {
    assert.strictEqual(JSON.stringify(_.map(['1','2','3'], Number)), '[1,2,3]');
    assert.strictEqual(JSON.stringify(_.map([1,2,3], String)), '["1","2","3"]');
  });

  it('provides the index as the second argument', function() {
    assert.strictEqual(JSON.stringify(_.map(['a', 'b', 'c'], function(val, idx) { return idx; })), '[0,1,2]');
  });

});


describe('filter', function() {

  it('returns an array of elements which fulfil the predicate', function() {
    var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
    assert.strictEqual(evens.join(', '), '2, 4, 6');
  });

});


describe('reduce', function() {

  it('reduces an array to a single value', function() {
    var sum = _.reduce([1, 2, 3], function(sum, num){ return sum + num; }, 0);
    assert.strictEqual(sum, 6);
  });

});


describe('range', function() {

  it('returns an array with the correct start, end, and step', function() {
    var range = _.range(5, 15, 2);
    assert.strictEqual(range.join(', '), '5, 7, 9, 11, 13');
  });

});


describe('union', function() {

  it('returns the union of all the provided arrays', function() {
    var union = _.union([1, 2, 3], [2, 30, 1], [1, 40]);
    assert.strictEqual(union.join(', '), '1, 2, 3, 30, 40');
  });

});


describe('flatten', function() {

  var list = [1, [2], [3, [[[4]]]]];

  it('can flatten nested arrays', function() {
    assert.deepEqual(_.flatten(list), [1,2,3,4]);
  });

  it('can shallowly flatten nested arrays', function() {
    assert.deepEqual(_.flatten(list, true), [1,2,3,[[[4]]]]);
  });

  it('can shallowly flatten arrays containing only other arrays', function() {
    list = [[1], [2], [3], [[4]]];
    assert.deepEqual(_.flatten(list, true), [1, 2, 3, [4]]);
  });

});


describe('pluck', function() {

  it('returns an array of the values at the provided key', function() {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    _.pluck(stooges, 'name');
  });
});


describe('each', function() {

  it('invokes the function once for each element in the array', function() {
    var answers = [];
    _.each([1, 2, 3], function(num){ answers.push(num * 5); });
    assert.strictEqual(answers.join(', '), '5, 10, 15');
  });

});


describe('findWhere', function() {

  it('returns the first matching element', function() {
    var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}, {a: 2, b: 4}];
    var result = _.findWhere(list, {a: 1});
    assert.deepEqual(result, {a: 1, b: 2});
    result = _.findWhere(list, {b: 4});
    assert.deepEqual(result, {a: 1, b: 4});
  });

});
