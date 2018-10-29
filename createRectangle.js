const generateRectangle = require('./src/patternsLib.js').generateRectangle;
const getPatternData = require('./src/patternsUtil.js').getPatternData;

const rectangleMain = function() {
  let {type,width,height} = getPatternData(process.argv);
 console.log(generateRectangle(type, width, height));
}

rectangleMain();
