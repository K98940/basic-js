const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};
  domains.forEach(domain => {
    domain.split('.').reverse().reduce((url, elem) => {
      domainsObj[`${url}.${elem}`] ??= [];
      domainsObj[`${url}.${elem}`].push(`${url}.${elem}`);
      return `${url}.${elem}`
    }, '')
  })

  for (key in domainsObj) {
    domainsObj[key] = domainsObj[key].length;
  }

  return domainsObj
}

module.exports = {
  getDNSStats
};
