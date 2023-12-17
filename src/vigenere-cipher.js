const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * directMachine.encrypt('
 * attack at dawn!
 * alphon sealphonse
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  constructor(direct = true) {
    this.direct = direct;
  }

  normalizeKey(msg, key) {
    const normKey = key.padEnd(msg.length, key).toUpperCase().split('');
    [...msg].forEach((char, i) => {
      if (this.alphabet.indexOf(char) === -1) {
        normKey.splice(i, 0, ' ');
      }
    })
    return normKey.join('');
  }

  getEncryptIndex(char, shiftIndex) {
    const currentIndex = this.alphabet.indexOf(char);
    const newIndex = currentIndex + shiftIndex;
    return newIndex > this.alphabet.length - 1 ? newIndex - this.alphabet.length : newIndex
  }

  getDecryptIndex(char, shiftIndex) {
    const currentIndex = this.alphabet.indexOf(char);
    const newIndex = currentIndex - shiftIndex;
    return newIndex < 0 ? this.alphabet.length + newIndex : newIndex
  }

  encrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let normMsg = [...msg.toUpperCase()];
    if (!this.direct) {
      normMsg = normMsg.reverse();
    }
    const normKey = this.normalizeKey(normMsg, key);

    const msgEncoded = normMsg.reduce((str, char, i) => {
      if (this.alphabet.indexOf(char) === -1) {
        return `${str}${char}`
      }
      const shiftIndex = this.alphabet.indexOf(normKey[i]);
      const newCharIndex = this.getEncryptIndex(char, shiftIndex);
      return `${str}${this.alphabet[newCharIndex]}`
    }, '');

    return msgEncoded;
  }

  decrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let normMsg = [...msg.toUpperCase()];
    if (!this.direct) {
      normMsg = normMsg.reverse();
    }
    const normKey = this.normalizeKey(normMsg, key);

    const msgDecoded = normMsg.reduce((str, char, i) => {
      if (this.alphabet.indexOf(char) === -1) {
        return `${str}${char}`
      }
      const shiftIndex = this.alphabet.indexOf(normKey[i]);
      const newCharIndex = this.getDecryptIndex(char, shiftIndex);
      return `${str}${this.alphabet[newCharIndex]}`
    }, '');

    return msgDecoded;
  }
}

module.exports = {
  VigenereCipheringMachine
};
