const generateTriangle = require('./src/patternsLib.js').generateTriangle;

const main = function() {
  let triangleAlignment = process.argv[2];
  let base = +process.argv[3];

 console.log(generateTriangle(triangleAlignment,base));
}

main();

