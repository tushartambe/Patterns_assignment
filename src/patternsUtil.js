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

const centerJustifier = function(maxLength) {
  return function(text) {
    let totalInitialCharaers  = maxLength - text.length;
    let textLength = text.length;
    let initialSpaceCount = (totalInitialCharaers - 1)/2;
    let spaces = repeat(' ',initialSpaceCount);

    return spaces+text+spaces;
  }
}


const rightJustifier = function(text,maxLength) {
  let textLength = text.length;
  let initialSpaceCount = maxLength - textLength;

  return initialSpaces(initialSpaceCount)+text;
}

const generateLineLengths = function(width) {
  let lengths =[];
  let substracter;
  for(let number = 1; number < width * 2; number += 2) {
    substracter =( width - number)/2;
    substracter = Math.abs(substracter);
    lengths.push(width -( substracter*2));
  }
  return lengths;
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
exports.rightJustifier = rightJustifier;
exports.generateLineLengths = generateLineLengths;
exports.getPatternData = getPatternData;
