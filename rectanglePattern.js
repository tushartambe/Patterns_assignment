let pattern = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];
let message= "";

if ( pattern == "filled") {
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    for(let columns = 1; columns <= width ; columns++) {
      message = message + "*";
    }
    console.log(message);
  }
}

if( pattern == "empty") {
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    if(rows == 1 || rows == height) {
      for(let columns = 1; columns <= width ; columns++) {
        message = message + "*";
      } 
    }else {
      message = "*";
      character = "";
      for(let columns = 1; columns <= width ; columns++) {
        message = message + character;
        character = " ";
        if ( columns == width-1) {
          character = "*";
        }
      }
    }
    console.log(message);
  }
}

if ( pattern == "alternating") {
  for(let rows = 1; rows <= height ; rows++) {
    message = "";
    
    if ((rows % 2) != 0) {
      for(let columns = 1; columns <= width ; columns++) {
        message = message + "*";
      }
    } else {
      for(let columns = 1; columns <= width ; columns++) {
        message = message + "-";
      }
    }
    console.log(message);
  }
}

