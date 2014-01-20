exports.map = function(list, transform, context) {
  var results = [];
  for (var idx = 0; idx < list.length; idx++) {
    results.push(transform(list[idx]));
  }
  return results;
};
