const lib = require('./patternsUtil.js'); 
let {repeat,
lineGenerator,
createLine,
joinLine,
initialSpaces,
centerJustifier,
rightJustifier,
generateLineLengths} = lib;

const filledLine = createLine('*','*','*');
const emptyLine = createLine('*',' ','*');
const dashLine = createLine('-','-','-');
const angledUpperLine = createLine('/',' ','\\');
const angledLowerLine = createLine('\\',' ','/');

//---------rectangle-------


createAnyRectangle = function(width,height,firstLine,middleLine,lastLine) {
  let rectangle = [];
  rectangle.push(firstLine(width));
  for(let row = 0;row < height-2;row++) {
    rectangle.push(middleLine(width)); 
  }
  if(height < 2) {
    return rectangle;
  }
  rectangle.push(lastLine(width));

  return rectangle;
}

const generateFilledRectangle = function(width,height) {
  return createAnyRectangle(width,height,filledLine,filledLine,filledLine);
}

const generateEmptyRectangle = function(width,height) {
  return createAnyRectangle(width,height,filledLine,emptyLine,filledLine);
}

const generateAlternatingRectangle = function(width,height) {
  let whichLine = { 0:filledLine, 1:dashLine };
  let alternateRectangle = [];
  
  for (let row=0;row < height; row ++) {
    let selectLineGenerator = whichLine; 
    alternateRectangle.push(whichLine[row % 2](width));
  }
  
  return alternateRectangle;
}

const generateRectangle = function (rectangleType,width,height) {
  let object  = {};
  object.filled = generateFilledRectangle;
  object.empty = generateEmptyRectangle;
  object.alternating = generateAlternatingRectangle;

  return object[rectangleType](width,height).join("\n");
}

//----------------------triangle-----------

const generateLeftTriangle = function(base) {
  let leftTriangle = [];
  let lineText = "";

  for(let rows = 1; rows <= base ; rows++) {
    lineText = filledLine(rows);
    leftTriangle.push(lineText);
  }
  return leftTriangle;
}

const generateRightTriangle = function(base) {
  let rightTriangle = [];
  let lineText;
  let justifiedLine = "";
  for(let rows = 1; rows <= base ; rows++) {
    lineText = filledLine(rows);
    justifiedLine = rightJustifier(lineText,base);
    rightTriangle.push(justifiedLine);
    justifiedLine = "";
  }
  return rightTriangle;
}

const generateTriangle = function (triangleAlignment,base) {
  let object  = {};
  object.left = generateLeftTriangle;
  object.right =generateRightTriangle;

  return object[triangleAlignment](base).join("\n");
}

//-----------------

const generateFilledDiamond = function(width) {
  let justifyLine = centerJustifier(width);
  let lengthsOfLines = generateLineLengths(width);
  
  let diamondPattern = lengthsOfLines.map(filledLine);

  return diamondPattern.map(justifyLine);
}

const generateHollowDiamond = function(width) {
  let justifyLine = centerJustifier(width);
  let lengthsOfLines = generateLineLengths(width);
  
  let diamondPattern = lengthsOfLines.map(emptyLine);

  return diamondPattern.map(justifyLine);
}

const generateAngledDiamond = function(width) {
  let justifyLine = centerJustifier(width);
  let lengthsOfLines = generateLineLengths(width);
  let diamondPattern = [];
  for(let counter = 0; counter < width; counter++) {
    if(counter == 0 || counter == Math.floor(width/2) || counter == width -1) {
      diamondPattern.push(emptyLine(lengthsOfLines[counter]));
    }
    if(counter > 0 && counter < Math.floor(width/2)) {
      diamondPattern.push(angledUpperLine(lengthsOfLines[counter]));
    }
    if(counter > Math.floor(width/2) && counter < (width - 1) ) {
      diamondPattern.push(angledLowerLine(lengthsOfLines[counter]));
    }

  }
  return diamondPattern.map(justifyLine);
}

const generateDiamond = function(diamondType,width) {
  if(width % 2 == 0) {
    width = width - 1;
  }
  let object  = { filled : generateFilledDiamond, hollow : generateHollowDiamond, angled :generateAngledDiamond };
  return object[diamondType](width).join("\n");
}
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
