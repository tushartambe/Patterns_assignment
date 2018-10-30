//---------rectangle-------
const repeat = function (character, noOfTimes) {
  let line = '';
  for (let count = 0; count < noOfTimes; count++) {
    line = line + character;
  }
  return line;
};

const lineGenerator = function(firstChar,middleChar,lastChar,width) {
  let first = repeat(firstChar,1);
  let middle = repeat(middleChar,width-2);
  let last = repeat(lastChar,1);
  return first+middle+last;
}

const createLine = function(firstChar,middleChar,lastChar) {
  return function(width) {
    return lineGenerator(firstChar,middleChar,lastChar,width);
  }
}

const joinLine = function(previousLine,currentLine,delimeter) {
  return previousLine + delimeter + currentLine;
}

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
    alternateRectangle = joinLine(alternateRectangle,whichLine[row % 2](width),delimeter);
    delimeter = "\n";
  }
  return alternateRectangle;
}

const generateRectangle = function (rectangleType,width,height) {
  let object  = { filled : generateFilledRectangle, empty : generateEmptyRectangle, alternating :generateAlternatingRectangle };
  return object[rectangleType](width,height);
}


//----------------------triangle-----------

const initialSpaces = function(noOfTimes) {
  return repeat(' ',noOfTimes);
}

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
  let object  = { left : generateLeftTriangle, right : generateRightTriangle }
  return object[triangleAlignment](base);
}

//-----------------

const upperFilledTriangle = function(width) {
  let message = "";
  let upperTriangle = "";
  let newline = "";
  for(let rows=1; rows<=width; rows+=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    for(let columns= 1; columns<=rows; columns++){
      message += "*";
    }
    upperTriangle = upperTriangle + newline + message;
    newline = "\n";
    message = "";
  }
  return upperTriangle;
}

const lowerFilledTriangle = function(width) {
  let message = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    for(let columns= 1; columns<=rows; columns++){
      message += "*";
    }
    lowerTriangle = lowerTriangle + newline + message;
    newline = "\n";
    message = "";
  }
  return lowerTriangle;
} 

const generateFilledDiamond = function(width) {
  return upperFilledTriangle(width) + "\n" + lowerFilledTriangle(width);
}

const upperHollowTriangle = function(width) {
  let message = "";
  let upperTriangle = "";
  let newline = "";
  for(let rows=1; rows<=width; rows+=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    let character = "";
    for(let columns= 1; columns<=rows; columns++){
      if ( columns == 1 || columns == rows) {
        message += "*";
      } else {
        message += " ";
      }
    }
    upperTriangle = upperTriangle + newline + message;
    newline = "\n";
    message = "";
  }
  return upperTriangle;
}

const lowerHollowTriangle = function(width) {
  let message = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    for(let columns= 1; columns<=rows; columns++){
      if ( columns == 1 || columns == rows) {
        message += "*";
      } else {
        message += " ";
      }
    }
    lowerTriangle = lowerTriangle + newline + message;
    newline = "\n";
    message = "";
  }
  return lowerTriangle;
} 

const generateHollowDiamond = function(width) {
  return upperHollowTriangle(width) + "\n" + lowerHollowTriangle(width);
}

const upperAngledTraingle = function(width) {
  let message = "";
  let newline = "";
  let upperTriangle = "";
  for(let rows=1; rows<=width; rows+=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    for(let columns= 1; columns<=rows; columns++){
      if ( columns == 1 || columns == rows) {
        if( rows == 1 || rows == width){
          message += "*";
        } else {
          if( columns == 1) {
            message += "/";
          }else {
            message += "\\";
          }
        }
      } else {
        message += " ";
      }
    }
    upperTriangle = upperTriangle + newline + message;
    newline = "\n";
    message = "";
  }
  return upperTriangle;
}

const lowerAngledTriangle = function(width) {
  let message = "";
  let lowerTriangle = "";
  let newline = "";
  for(let rows=width-2; rows>=1; rows-=2){
    for(let spaces = 1; spaces <=width - rows; spaces+=2){
      message += " ";
    }
    for(let columns= 1; columns<=rows; columns++){
      if ( columns == 1 || columns == rows) {
        if( rows == width | rows == 1){
          message += "*";
        } else {
          if( columns == 1) {
            message += "\\";
          } else {
            message += "/";
          }
        }
      } else {
        message += " ";
      }
    }
    lowerTriangle = lowerTriangle + newline + message;
    newline = "\n";
    message = "";
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
