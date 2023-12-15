const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const CONTROLS = {
    '--discard-next': '--discard-next',
    '--discard-prev': '--discard-prev',
    '--double-next': '--double-next',
    '--double-prev': '--double-prev',
  }
  const isControl = (element) => {
    if (Object.keys(CONTROLS).includes(element)) return true;
    return false;
  }

  const transform = [];
  let isDiscardNext = false;

  for (const e of arr) {
    switch (e) {
      case CONTROLS['--discard-next']:
        isDiscardNext = true;
        transform.push(e)
        break;
      case CONTROLS['--discard-prev']:
        transform.pop();
        break;
      case CONTROLS['--double-next']:
        const next = arr[transform.length + 1];
        next && transform.push(next);
        break;
      case CONTROLS['--double-prev']:
        const prev = transform[transform.length - 1];
        prev && transform.push(prev);
        break;

      default:
        if (isDiscardNext) {
          isDiscardNext = false;
        } else {
          transform.push(e);
        }
        break;
    }
  }
  return transform.filter(e => !isControl(e));
}

module.exports = {
  transform
};
