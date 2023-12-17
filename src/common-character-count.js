const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 bc
 da
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s2 = [...s2];
  return count = [...s1].reduce((count, char) => {
    const index = s2.indexOf(char);
    if (index !== -1) {
      s2.splice(index, 1);
      return count + 1;
    }
    return count;
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
