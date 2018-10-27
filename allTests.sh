#! /bin/bash

./run_test.sh ./createRectangle.js ./test/inputFilledRectangle ./test/outputFilledRectangle
./run_test.sh ./createRectangle.js ./test/inputEmptyRectangle ./test/outputEmptyRectangle
./run_test.sh ./createRectangle.js ./test/inputAlternatingRectangle ./test/outputAlternatingRectangle

./run_test.sh ./createTriangle.js ./test/inputLeftTriangle ./test/outputLeftTriangle
./run_test.sh ./createTriangle.js ./test/inputRightTriangle ./test/outputRightTriangle

./run_test.sh ./createDiamond.js ./test/inputFilledDiamond ./test/outputFilledDiamond
./run_test.sh ./createDiamond.js ./test/inputHollowDiamond ./test/outputHollowDiamond
./run_test.sh ./createDiamond.js ./test/inputAngledDiamond ./test/outputAngledDiamond
