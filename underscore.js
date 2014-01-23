exports.map = function(list, transform) {
  var results = [];
  var idx = 0;
  while (idx < list.length) {
    results.push(transform(list[idx], idx));
    idx += 1;
  }
  return results;
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
  