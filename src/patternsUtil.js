const repeat = function (character, noOfTimes) {
  let line = '';
  for (let count = 0; count < noOfTimes; count++) {
    line = line + character;
  }
  return line;
};

const lineGenerator = function(firstChar,middleChar,lastChar,width) {
  if(width < 2) {
    return firstChar;
  }
  let first = repeat(firstChar,1);
  let middle = repeat(middleChar,width-2);
  let last = repeat(lastChar,1);
  return first+middle+last;
}

const createLine = function(firstChar,middleChar,lastChar) {
  return function(width) {
    if(width < 2) {
      return firstChar;
    }
    return lineGenerator(firstChar,middleChar,lastChar,width);
  }
}

const joinLine = function(previousLine,currentLine,delimeter) {
  return previousLine + delimeter + currentLine;
}

const initialSpaces = function(noOfTimes) {
  return repeat(' ',noOfTimes);
}

const centerJustifier = function(text,maxLength) {
  if(!(maxLength % 2)) {
    maxLength = maxLength - 1;
  }
  
  maxLength = maxLength - text.length;

  let textLength = text.length;
  let initialSpaceCount = (maxLength - 1)/2;
  let spaces = repeat(' ',initialSpaceCount);

  return spaces+text+spaces;
}

const getPatternData = function(data) {
  let pattern = {};
  pattern.type = data[2];
  pattern.width = +data[3];
  pattern.height = +data[4];
  return pattern;
}

exports.repeat = repeat;
exports.lineGenerator = lineGenerator;
exports.createLine = createLine;
exports.joinLine = joinLine;
exports.initialSpaces = initialSpaces;
exports.centerJustifier = centerJustifier;
exports.getPatternData = getPatternData;
