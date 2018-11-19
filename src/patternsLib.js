//---------rectangle-------
const lib = require('./patternsUtil.js'); 
let {repeat} = lib;
let {lineGenerator} = lib;
let {createLine} = lib;
let {joinLine} = lib;
let {initialSpaces} = lib;
let {centerJustifier} = lib;

const filledLine = createLine('*','*','*');
const emptyLine = createLine('*',' ','*');
const dashLine = createLine('-','-','-');

const createAnyRectangle = function(width,height,firstLine,middleLine,lastLine) {
  let delimeter = "\n";
  let rectangle = firstLine(width);
  for(let row = 0;row < height-2;row++) {
    let midLine = middleLine(width);
    rectangle = joinLine(rectangle,midLine,delimeter);
  }
  if(height < 2) {
    return rectangle;
  }
  return joinLine(rectangle,lastLine(width),delimeter);
}

const generateFilledRectangle = function(width,height) {
  return createAnyRectangle(width,height,filledLine,filledLine,filledLine);
}

const generateEmptyRectangle = function(width,height) {
  return createAnyRectangle(width,height,filledLine,emptyLine,filledLine);
}

const generateAlternatingRectangle = function(width,height) {
  let whichLine = { 0:filledLine, 1:dashLine };
  let alternateRectangle = "";
  let delimeter = "";
  for (let row=0;row < height; row ++) {
    let selectLineGenerator = whichLine 
    alternateRectangle = joinLine(alternateRectangle,whichLine[row % 2](width),delimeter);
    delimeter = "\n";
  }
  return alternateRectangle;
}

const generateRectangle = function (rectangleType,width,height) {
  let object  = {};
  object.filled = generateFilledRectangle;
  object.empty = generateEmptyRectangle;
  object.alternating = generateAlternatingRectangle;

  return object[rectangleType](width,height);
}


//----------------------triangle-----------

const generateLeftTriangle = function(base) {
  let leftTriangle = "";
  let delimeter = "";
  let lineText = "";

  for(let rows = 1; rows <= base ; rows++) {
    lineText = repeat('*',rows);
    leftTriangle =joinLine(leftTriangle,lineText,delimeter); 
    delimeter = "\n";
  }
  return leftTriangle;
}

const generateRightTriangle = function(base) {
  let rightTriangle = "";
  let delimeter = "";
  let lineText
  for(let rows = 1; rows <= base ; rows++) {
    lineText = initialSpaces(base-rows) + repeat('*',rows);

    rightTriangle = joinLine(rightTriangle,lineText,delimeter);
    delimeter= "\n";
  }
  return rightTriangle;
}

const generateTriangle = function (triangleAlignment,base) {
  let object  = {};
  object.left = generateLeftTriangle;
  object.right =generateRightTriangle;

  return object[triangleAlignment](base);
}

//-----------------

const upperFilledTriangle = function(width) {
  let lineText = "";
  let upperTriangle = "";
  let newline = "";
  for(let rows=1; rows<=width; rows+=2){
    lineText += initialSpaces((width-rows)/2);
    lineText += repeat('*',rows);
    upperTriangle = joinLine(upperTriangle,lineText,newline);
    newline = "\n";
    lineText = "";
  }
  return upperTriangle;
}

const lowerFilledTriangle = function(width) {
  let lineText = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    lineText += initialSpaces((width - rows)/2);
    lineText += repeat('*',rows);
    lowerTriangle = joinLine(lowerTriangle,lineText, newline);
    newline = "\n";
    lineText = "";
  }
  return lowerTriangle;
} 

const generateFilledDiamond = function(width) {
  return upperFilledTriangle(width) + "\n" + lowerFilledTriangle(width);
}

const upperHollowTriangle = function(width) {
  let lineText = "";
  let upperTriangle = "";
  let newline = "";
  for(let rows=1; rows<=width; rows+=2){
    lineText += initialSpaces((width-rows)/2);
    lineText += emptyLine(rows);
    upperTriangle = joinLine(upperTriangle,lineText, newline);
    newline = "\n";
    lineText = "";
  }
  return upperTriangle;
}

const lowerHollowTriangle = function(width) {
  let lineText = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    lineText += initialSpaces((width-rows)/2);
    lineText += emptyLine(rows);
    lowerTriangle = joinLine(lowerTriangle,lineText, newline);
    newline = "\n";
    lineText = "";
  }
  return lowerTriangle;
} 

const generateHollowDiamond = function(width) {
  return upperHollowTriangle(width) + "\n" + lowerHollowTriangle(width);
}

const upperAngledTraingle = function(width) {
  let lineText = "";
  let newline = "";
  let upperTriangle = "";
  for(let rows=1; rows<=width; rows+=2){
    lineText += initialSpaces((width-rows)/2);
    
    if(rows == 1 || rows == width ) {
      lineText += lineGenerator('*',' ','*',rows);
    } else {
      lineText += lineGenerator('/',' ','\\',rows);
    }
    
    upperTriangle = joinLine(upperTriangle,lineText, newline);
    newline = "\n";
    lineText = "";
  }
  return upperTriangle;
}

const lowerAngledTriangle = function(width) {
  let lineText = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    lineText += initialSpaces((width-rows)/2);

    if(rows == 1 || rows == width ) {
      lineText += lineGenerator('*',' ','*',rows);
    } else {
      lineText += lineGenerator('\\',' ','/',rows);
    }
    lowerTriangle = joinLine(lowerTriangle,lineText, newline);
    newline = "\n";
    lineText = "";
  }
  return lowerTriangle;
} 

const generateAngledDiamond = function(width) {
  return upperAngledTraingle(width) + "\n" + lowerAngledTriangle(width);
}

const generateDiamond = function(diamondType,width) {
  if(width % 2 == 0) {
    width = width - 1;
  }
  let object  = { filled : generateFilledDiamond, hollow : generateHollowDiamond, angled :generateAngledDiamond };
  return object[diamondType](width);
}
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
