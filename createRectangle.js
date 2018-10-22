const generateRectangle = require('./src/patternsLib.js').generateRectangle;

const rectangleMain = function() {
  let rectangleType = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];

 console.log(generateRectangle(rectangleType,width,height));
}

rectangleMain();
