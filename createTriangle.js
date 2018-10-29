const generateTriangle = require('./src/patternsLib.js').generateTriangle;
const getPatternData = require('./src/patternsUtil.js').getPatternData;

const triangleMain = function() {
  let {type,width} = getPatternData(process.argv);
 console.log(generateTriangle(type, width));
}

triangleMain();
