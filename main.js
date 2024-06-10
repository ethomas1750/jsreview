const returnEmptyString = function () {
    return "";
};

const returnZeroNumber = function () {
    return 0;
};

const returnEmptyArray = function () {
    return new Array();
};

const returnEmptyObject = function () {
    return {};
};

const returnString = function () {
    return 'abc123';
};

const addition = function (num1, num2) {
    return num1 + num2;
};

const subtraction = function (num1, num2) {
    return num1 - num2;
};

const multiplication = function (num1, num2) {
    return num1 * num2;
};

const division = function (num1, num2) {
    return num1 / num2;
};

const returnArray = function () {
    let item = [1, 2, 3];
    return item;
};

const returnFirstIndex = function (array) {
    return array[0];
};

const returnSecondIndex = function (array) {
    return array[1];
};

const returnArrayLength = function (array) {
    return array.length;
};

const arraySum = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
};

const arraySubtraction = function (array) {
    let total = 0
    for(let i = 0; i <array.length; i++){
        total -= array[i]
    } return total;
};
const multiplicationArray = function (array) {
    var item = 1;
    for (var i = 0; i < array.length; i++) {
        item *= array[i];
    }
    return item;
};

const divisionArray = function (array) {
    let accumulator = array[0]
      for (let i = 1; i < array.length; i++) {
       accumulator /= array[i]
      }
      result = accumulator.toFixed(3);
      return +result
      //parseFloat(result)
};

const oddArray = function (array) {
    return array.filter(num => num % 2 === 1);
};

const evenArray = function (array) {
    return array.filter(num => num % 2 === 0);
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
