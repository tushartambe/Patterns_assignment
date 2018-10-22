let pattern = process.argv[2];
let base = +process.argv[3];

if ( pattern == "left") {
  for(let rows = 1; rows <= base ; rows++) {
    message = "";
    for(let columns = 1; columns <= rows; columns++) {
      message = message + "*";
    }
    console.log(message);
  }
}

if ( pattern == "right") {
  let message = "";
  for(let rows = 1; rows <= base ; rows++) {
    for(let columns=1; columns<=base; columns++){
      if(columns > base - rows){
        message += "*";
      } else {
        message+= " ";
      }
    }
    message+="\n";  
  }
  console.log(message);
}
