const getPatternData = function(data) {
  let pattern = {};
  pattern.type = data[2];
  pattern.width = +data[3];
  pattern.height = +data[4];
  return pattern;
}

exports.getPatternData = getPatternData;
