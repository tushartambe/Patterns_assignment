let pattren = process.argv[2];
let width = process.argv[3];

const diamond = function (width){
  if( width % 2 == 0) {
    width = width - 1;
  }
  upperTriange(width);
  lowerTriangle(width);
}

const upperTriange = function(width) {
  let message = "";
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
    console.log(message);
    message = "";
  }
}

const lowerTriangle = function(width) {
  let message = "";
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
    console.log(message);
    message = "";
  }
} 

diamond(width);



