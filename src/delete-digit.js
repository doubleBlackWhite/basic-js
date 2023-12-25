const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
  const numberStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    const newNumStr = numberStr.slice(0, i) + numberStr.slice(i + 1);
    const newNum = parseInt(newNumStr, 10);
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }

  return maxNum;
}


module.exports = {
  deleteDigit
};
