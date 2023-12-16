const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
  },
  addLink(value) {
    this.value = value || (this.value = '');
    this.value = this.value.toString() ? this.value : '(  )';
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.isCorrectPosition(position)) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
  isCorrectPosition(position) {
    if (typeof position !== 'number') return false;
    if (position < 1) return false;
    if (position % 1 > 0) return false;
    if (position > this.chain.length) return false;
    return true;
  }
};

module.exports = {
  chainMaker
};
