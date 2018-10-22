const filledRectangle = function(width,height) {
  let filledRect = "";
  let newline = "";
  let message;
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    for(let columns = 1; columns <= width ; columns++) {
      message = message + "*";
    }
    filledRect = filledRect + newline + message;
    newline = "\n";
  }
  return filledRect;
}
//-----------------emptyrectangle----------
const firstAndLastLine = function(width) {
  let message="";
  for(let columns = 1; columns <= width ; columns++) {
    message += "*";
  }
  return message;
}

const middleRows = function (width) {
  let message = "*";
  let character = ""; 
  for(let columns = 1; columns <= width ; columns++) {
    message = message + character;
    character = " ";
    if ( columns == width-1) {
      character = "*";
    }
  }
  return message;
}

const emptyRectangle = function(width,height) {
  let message;
  let emptyRect = "";
  let newline = "";
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    if(rows == 1 || rows == height) {
      message += firstAndLastLine(width);
    }else {
      message += middleRows(width);
    }
    emptyRect = emptyRect + newline + message;
    newline = "\n";
  }
  return emptyRect;
}
//------------------------------------------

const oddRow = function (width) {
  let message = ""; 
  for(let columns = 1; columns <= width ; columns++) {
    message +=  "*";
  }
  return message;
}

const evenRow = function (width) {
  let message = "";
  for(let columns = 1; columns <= width ; columns++) {
    message += "-";
  }
  return message;
}

const alternatingRectangle = function(width,height) {
  let message;
  let newline = "";
  let alternatingRect ="";
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    if ((rows % 2) != 0) {
      message = oddRow(width); 
    } else {
      message = evenRow(width);
    }
    alternatingRect = alternatingRect + newline + message;
    newline = "\n";
  }
  return alternatingRect;
}

const generateRectangle = function (rectangleType,width,height) {
  if ( rectangleType == "filled")
    return filledRectangle(width,height);

  if( rectangleType == "empty") 
    return emptyRectangle(width,height);

  if ( rectangleType == "alternating") 
    return alternatingRectangle(width,height);
}

exports.generateRectangle = generateRectangle;

//----------------------triangle-----------
const leftRowsGeneration = function(rows) {
  let message = "";
  for(let columns = 1; columns <= rows; columns++) {
    message += "*";
  }
  return message;
}

const generateLeftTriangle = function(base) {
  let leftTriangle = "";
  let newline = "";
  let lineText = "";

  for(let rows = 1; rows <= base ; rows++) {
    lineText = leftRowsGeneration(rows);
    leftTriangle = leftTriangle + newline + lineText;
    newline = "\n";
  }
  return leftTriangle;
}

const rightRowsGeneration = function(base,rows){
  let message = "";
  for(let columns=1; columns<=base; columns++){
    if(columns > base - rows){
      message += "*";
    } else {
      message+= " ";
    }
  }
  return message;
}

const generateRightTriangle = function(base) {
  let rightTriangle = "";
  let newline = "";
  let lineText
  for(let rows = 1; rows <= base ; rows++) {
    lineText = rightRowsGeneration(base,rows);
    rightTriangle = rightTriangle + newline + lineText;
    newline= "\n";
  }
  return rightTriangle;
}
//-----------------
const generateTriangle = function (triangleAlignment,base) {
  if ( triangleAlignment == "left") 
    return generateLeftTriangle(base);

  if ( triangleAlignment == "right") 
    return generateRightTriangle(base);

}
exports.generateTriangle = generateTriangle;
