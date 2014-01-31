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
  if (list.length === 0) {
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
console.log(exports.union([1, 2, 3], [2, 30, 1], [1, 40]))


/*
exports.intersection = function(arrays){
  var j = array[0], var h = array[1];  
  for (var i = 0; i < argumnets.length; i += 1){
    for (j = 0; j < array.length; j += 1){
    results.push(j[idx]? === h[idx]) 
  }
}
*/













