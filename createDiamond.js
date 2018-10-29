const generateDiamond = require('./src/patternsLib.js').generateDiamond;
const getPatternData = require('./src/patternsUtil.js').getPatternData;

const diamondMain = function() {
  let {type,width} = getPatternData(process.argv);
 console.log(generateDiamond(type, width));

}

diamondMain();
