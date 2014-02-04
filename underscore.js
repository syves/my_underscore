var underscore = require('underscore'); 

var _ = exports;

var map = function(list, results, transform) {
  if (list.length === 0){
    return results;
  } else {
    return map(list.slice(1), results.concat(transform(list[0], results.length)), transform);
  }
};

exports.map = function(list, transform) {
  return map(list, [], transform);
};

var filter = function(list, results, condition) {
  if (list.length === 0){
    return results;
  } else {
    return filter(list.slice(1), (condition(list[0]) ? results.concat(list[0]) : results), condition);
  }
}

exports.filter = function(list, condition) {
  return filter(list, [], condition);
};

exports.reduce = function(list, iterator, result, context) {
  if (arguments.length < 3) {
    return exports.reduce(list.slice(1), iterator, list[0]);
  } else if (list.length === 0) {
    return result;
  } else {
    return exports.reduce(list.slice(1), iterator, iterator(result, list[0]), context)
  }
}

var range = function(num, stop, step) {
  if (num >= stop) {
    return [];
  } else {
    return [num].concat(range(num + step, stop, step));
  }

};
  //rewrite with def!!
exports.range = function() {
  var start = 0, stop, step = 1, list = [];
  if (arguments.length === 1) {
    stop = arguments[0];
  } else if (arguments.length === 2) {
    start = arguments[0];
    stop = arguments[1];
  } else {
    start = arguments[0];
    stop = arguments[1];
    step = arguments[2];
  }
  return range(start, stop, step);
}

exports.union = function(){
  return underscore.uniq(Array.prototype.concat.apply([], arguments));
}

var intersection = function(a, b) {
  var results = [];
  for (i = 0; i < a.length; i += 1) {
   if (b.indexOf(a[i]) >= 0) {
    results.push(a[i]);
   }
  }
  return results;
};

var intersection = function(a, b) {
  return exports.filter(a, function(val) {
    return b.indexOf(val) >= 0;
  });
};

exports.intersection = function() {
  var lists = Array.prototype.slice.apply(arguments);
  return underscore.uniq(exports.reduce(lists, intersection));
}

var difference = function(a, b) {
  return exports.filter(a, function(val) { return b.indexOf(val) < 0; });
};

exports.difference = function() {
  var lists = Array.prototype.slice.apply(arguments);
  return exports.reduce(lists, difference);
}

exports.uniq = function(array, iterator, isSorted) {
  if (array.length === 0){
    return [];
  } else {
    var first = array[0];
    var rest = array.slice(1);
    return [first].concat(exports.uniq(exports.filter(rest, function(val){
      return val !== first;
    })));
  }
};


exports.isArray = function(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
};


var shallow = function(){
  if (array.length === 0){
    return [];
  } else {
  var first = array[0];
  var rest = array.slice(1);
    if (first = []){
      return first.concat(rest)}
  }
};

_.flatten = function(array, shallow) {
  if (shallow) {
    return Array.prototype.concat.apply([], array);
  } else if (array.length === 0){
    return [];
  } else {
    var first = array[0];
    return (_.isArray(first) ? _.flatten(first) : [first])
           .concat(_.flatten(array.slice(1)));
  }
};



/*  _.flatten( [ [1], [2], [3] ] )

array: [ [1], [2], [3] ]
array.length: 3
first: [1]
_.isArray(first): true
_.flatten(first): [1]
array.slice(1): [ [2], [3] ]
_.flatten(array.slice(1)): [2, 3]
_.flatten(first).concat(_.flatten(array.slice(1))): [1, 2, 3]



array: [ [2], [3] ]
array.length: 2
first: [2]
_.isArray(first): true
_.flatten(first): [2]
array.slice(1): [3]
_.flatten(array.slice(1)): [3]
_.flatten(first).concat(_.flatten(array.slice(1))): [2, 3]


array: [2]
array.length: 1
first: 2
_.isArray(first): false
[first]: [2]
array.slice(1): []
_.flatten(array.slice(1)): []
[first].concat(_.flatten(array.slice(1))): [2]




array: [1]
array.length: 1
first: 1
_.isArray(first): false
[first]: [1]
array.slice(1): []
_.flatten(array.slice(1)): []
[first].concat(_.flatten(array.slice(1))): [1]



array: []
array.length: 0
return [] !!

*/
