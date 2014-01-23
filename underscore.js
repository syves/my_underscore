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

exports.filter = function(list, condition) {
  var results = [];
  var idx = 0;
  while (idx < list.length) {
    if (condition(list[idx])) {
      results.push(list[idx]);
    }
    idx += 1;
  }
  return results;
};
  