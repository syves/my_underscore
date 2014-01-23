exports.map = function(list, transform) {
  var results = [];
  var idx = 0;
  while (idx < list.length) {
    results.push(transform(list[idx], idx));
    idx += 1;
  }
  return results;
};
