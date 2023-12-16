const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 0; k < arr.length - i; k += 1) {
      if (arr[k] === -1) continue;
      let nextIndex = k + 1;
      while (arr[nextIndex] === -1 && (nextIndex < arr.length - i)) {
        nextIndex += 1;
      }
      if (arr[nextIndex] === -1) continue;
      if (arr[k] > arr[nextIndex]) {
        [arr[k], arr[nextIndex]] = [arr[nextIndex], arr[k]];
      }
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
