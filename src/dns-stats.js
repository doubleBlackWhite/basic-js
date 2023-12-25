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
  const stats = {};

  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    let current = '';
    for (let part of parts) {
      current += `.${part}`;
      stats[current] = (stats[current] || 0) + 1;
    }
  }
  const result = {};
  for (let key in stats) {
    result[key] = stats[key];
  }

  return result;
}

module.exports = {
  getDNSStats
};
