const assert = require('assert');
const generateRectangle = require('../src/patternsLib.js').generateRectangle;
const generateTriangle = require('../src/patternsLib.js').generateTriangle;
const generateDiamond = require('../src/patternsLib.js').generateDiamond;

//generateRectangle tests
//filledRectangle
assert.equal(generateRectangle("filled",2,2),"**\n**");
assert.equal(generateRectangle("filled",3,2),"***\n***");
assert.equal(generateRectangle("filled",3,3),"***\n***\n***");

console.log("+-- Filled Rectangle tests passed. --+");

//emptyRectangle
assert.equal(generateRectangle("empty",2,2),"**\n**");
assert.equal(generateRectangle("empty",3,2),"***\n***");
assert.equal(generateRectangle("empty",3,3),"***\n* *\n***");
assert.equal(generateRectangle("empty",3,4),"***\n* *\n* *\n***");
assert.equal(generateRectangle("empty",4,5),"****\n*  *\n*  *\n*  *\n****");

console.log("+-- Empty Rectangle tests passed. --+");

//alternatingRectangle
assert.equal(generateRectangle("alternating",2,2),"**\n--");
assert.equal(generateRectangle("alternating",3,2),"***\n---");
assert.equal(generateRectangle("alternating",3,4),"***\n---\n***\n---");
assert.equal(generateRectangle("alternating",4,4),"****\n----\n****\n----");

console.log("+-- Alternating Rectangle tests passed. --+");

//generateTriangle tests
//leftTriangle
assert.equal(generateTriangle("left",2),"*\n**");
assert.equal(generateTriangle("left",3),"*\n**\n***");
assert.equal(generateTriangle("left",5),"*\n**\n***\n****\n*****");

console.log("+--  Left Triangle tests passed. --+");

//rightTriangle
assert.equal(generateTriangle("right",2)," *\n**");
assert.equal(generateTriangle("right",4),"   *\n  **\n ***\n****");
assert.equal(generateTriangle("right",5),"    *\n   **\n  ***\n ****\n*****");

console.log("+--  Right Triangle tests passed. --+");

//generateDiamond tests
//filledDiamond 
assert.equal(generateDiamond("filled",4)," * \n***\n * ");
assert.equal(generateDiamond("filled",5),"  *  \n *** \n*****\n *** \n  *  ");
assert.equal(generateDiamond("filled",7),"   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");

console.log("+--  Filled Diamond tests passed. --+");

//hollowDiamond
assert.equal(generateDiamond("hollow",3)," * \n* *\n * ");
assert.equal(generateDiamond("hollow",5),"  *  \n * * \n*   *\n * * \n  *  ");
assert.equal(generateDiamond("hollow",7),"   *   \n  * *  \n *   * \n*     *\n *   * \n  * *  \n   *   ");

console.log("+--  Hollow Diamond tests passed. --+");
//angledDiamond
assert.equal(generateDiamond("angled",3)," * \n* *\n * ");
assert.equal(generateDiamond("angled",5),"  *  \n / \\ \n*   *\n \\ / \n  *  ");
assert.equal(generateDiamond("angled",7),"   *   \n  / \\  \n /   \\ \n*     *\n \\   / \n  \\ /  \n   *   ");

console.log("+--  Angled Diamond tests passed. --+");
console.log("+--  CONGRATULATIONS!!! All tests passed. --+");
