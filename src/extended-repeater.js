const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let result = str;
  let additionResult = '';
  const toString = (str) => {
    if (typeof str === 'object') {
      str = String(str);
    }
    if (typeof str !== 'string') {
      str = str.toString();
    }
    return str
  }

  if (addition === null) addition = 'null';
  addition ??= '';
  str = toString(str);
  addition = toString(addition);
  repeatTimes ??= 1;
  separator ??= '+';
  additionRepeatTimes ??= 0;
  additionSeparator ??= '|';

  for (let i = 1; i < additionRepeatTimes; i += 1) {
    additionResult += addition + additionSeparator;
  }
  additionResult += addition;

  for (let i = 1; i < repeatTimes; i += 1) {
    result += additionResult + separator + str;
  }
  result += additionResult;

  return result
}

module.exports = {
  repeater
};
