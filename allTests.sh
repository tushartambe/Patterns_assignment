#! /bin/bash

./run_test.sh ./src/rectanglePattern.js ./test/inputFilledRectangle ./test/outputFilledRectangle
./run_test.sh ./src/rectanglePattern.js ./test/inputEmptyRectangle ./test/outputEmptyRectangle
./run_test.sh ./src/rectanglePattern.js ./test/inputAlternatingRectangle ./test/outputAlternatingRectangle

./run_test.sh ./src/trianglePattern.js ./test/inputLeftTriangle ./test/outputLeftTriangle
./run_test.sh ./src/trianglePattern.js ./test/inputRightTriangle ./test/outputRightTriangle

./run_test.sh ./src/diamond.js ./test/inputFilledDiamond ./test/outputFilledDiamond
./run_test.sh ./src/hollowDiamond.js ./test/inputHollowDiamond ./test/outputHollowDiamond
./run_test.sh ./src/angledDiamond.js ./test/inputAngledDiamond ./test/outputAngledDiamond
