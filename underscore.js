var underscore = require('underscore'); 

var map = function(list, results, transform){
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
exports.range = function(){
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

//console.log(exports.union([1, 2, 3], [2, 30, 1], [1, 40]))


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

exports.intersection = function(){
  var lists = Array.prototype.slice.apply(arguments);
  return underscore.uniq(exports.reduce(lists, intersection));

}

console.log(exports.intersection([1, 1, 2, 3], [2, 30, 1], [1, 40]))






var shakrah = {
  name: 'Shakrah',
  greet: function(a, b) {
    return 'Hello, my name is ' + this.name + ' (' + a + ', ' + b + ').';
  }
};

console.log(shakrah.greet('foo', 'bar'));

var greet = shakrah.greet;

var david = {
  name: 'David'
};

console.log(shakrah.greet.call(david, 1, 2));
console.log(shakrah.greet.apply(david, [1, 2]));

