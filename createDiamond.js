const generateDiamond = require('./src/patternsLib.js').generateDiamond;

const diamondMain = function() {
  let diamondType = process.argv[2];
  let width = +process.argv[3];
  console.log(generateDiamond(diamondType,width));
}

diamondMain();
