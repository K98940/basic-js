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
function deleteDigit(n) {
  const nString = n.toString();
  const cuttedNums = [...nString].reduce((arr, _, idx) => {
    const nStr = [...nString];
    nStr.splice(idx, 1);
    const cuttedNum = Number(nStr.join(''));
    arr.push(cuttedNum);
    return arr
  }, []);

  return cuttedNums.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
