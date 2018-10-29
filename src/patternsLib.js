const generateFilledRectangle = function(width,height) {
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

const generateEmptyRectangle = function(width,height) {
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

const generateAlternatingRectangle = function(width,height) {
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
  let object  = { filled : generateFilledRectangle, empty : generateEmptyRectangle, alternating :generateAlternatingRectangle };
  return object[rectangleType](width,height);
}


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
