const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 1;
    this.counts = [];
    this.result = null;
  }

  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    if (this.count === 1) console.debug('*** got array: ', arr);

    for (const el of arr) {
      if (Array.isArray(el)) {
        this.count += 1;
        this.calculateDepth(el);
      }
    }
    this.counts.push(this.count);
    this.result = Math.max(...this.counts);
    this.count = 1;
    // this.counts = [];
    console.debug('*** return: ', this.result, '\n');
    return this.result;
  }
}

module.exports = {
  DepthCalculator
};
