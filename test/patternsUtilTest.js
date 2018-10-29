const assert = require('assert');
const getPatternData = require('../src/patternsUtil.js').getPatternData;

assert.deepEqual(getPatternData([,,'filled',2,5]),{type:'filled',width:2,height:5});
assert.deepEqual(getPatternData([,,'empty',9,3]),{type:'empty',width:9,height:3});

assert.deepEqual(getPatternData([,,'left',3,5,]),{type:'left',width:3,height:5});
assert.deepEqual(getPatternData([,,'right',9,5]),{type:'right',width:9,height:5});

assert.deepEqual(getPatternData([,,'angled',9,3]),{type:'angled',width:9,height:3});
assert.deepEqual(getPatternData([,,'hollow',5,8]),{type:'hollow',width:5,height:8});
