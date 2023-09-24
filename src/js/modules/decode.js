/**
 * Раскодировать
 * @module
 * @function
 * @param {String} input Закодированная строка
 * @returns {string}
 */
export default input => input
  .match(/\d+/g)
  .map((x) => Math.abs((2 - x) / 2))
  .join('')
  .split('0.5')
  .map((x, i, a) => i % 2 ? false : [parseInt(x, 10), parseInt(a[i + 1], 10)])
  .filter((x) => x)
  .sort((a, b) => a[1] > b[1])
  .map((x) => String.fromCharCode(x[0]))
  .join('');
