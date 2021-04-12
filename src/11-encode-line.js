/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  const arr = [];
  let counter = 1;
  for (let i = 0; i < arrStr.length; i++) {
    if (i + 1 < arrStr.length) {
      if (arrStr[i] === arrStr[i + 1]) {
        counter++;
      } else if (counter !== 1) {
        arr.push(counter.toString());
        arr.push(arrStr[i]);
        counter = 1;
      } else {
        arr.push(arrStr[i]);
      }
    } else if (counter !== 1) {
      arr.push(counter.toString());
      arr.push(arrStr[i]);
    } else {
      arr.push(arrStr[i]);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
