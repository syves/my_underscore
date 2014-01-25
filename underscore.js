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

var filter = function(list, results, condition){
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
  if (list.length === 0){
    return result;
  } else {
    return exports.reduce(list.slice(1), iterator, iterator(result, list[0]), context)
  }
}

