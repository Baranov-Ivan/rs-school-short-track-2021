/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const len = array.length;
  let left = 0;
  let right = len - 1;
  let mid;
  const cond = true;
  while (cond === true) {
    if (left > right) return -1;
    mid = Math.round(left + (right - left) / 2);
    if (array[mid] < value) left = mid + 1;
    if (array[mid] > value) right = mid - 1;
    if (array[mid] === value) return mid;
  }

  return mid;
}

module.exports = findIndex;
