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
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  console.debug('1. s1 = ', s1);
  console.debug('1. s2 = ', s2);
  s1 = [...s1].filter((s, i, arr) => arr.indexOf(s) === i);
  s2 = [...s2].filter((s, i, arr) => arr.indexOf(s) === i);
  count = s1.reduce((count, s1el) => {
    console.debug(`count ${count}, s1el ${s1el}, s2.indexOf(s1el) ${s2.indexOf(s1el)}`);
    return count = s2.indexOf(s1el) > -1 ? ++count : count
  }, 0);

  console.debug('2. s1 = ', s1);
  console.debug('2. s2 = ', s2);
  return count
}

module.exports = {
  getCommonCharacterCount
};
