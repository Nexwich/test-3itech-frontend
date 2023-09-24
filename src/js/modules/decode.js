/**
 * Раскодировать
 * @module
 * @function
 * @param {String} input Закодированная строка
 * @returns {string}
 */
export default input => input
  .match(/\d+/g).map((x, i) => Math.abs((2 - x) / 2))
  .join('')
  .split('0.5')
  .map((x, i, a) => i % 2 ? false : [x, a[i + 1]])
  .filter((x) => x)
  .sort((a, b) => parseInt(a[1], 10) > parseInt(b[1], 10))
  .map((x) => String.fromCharCode(x[0]))
  .join('');
