/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function checkNeighbors(matrix, indexI, indexJ) {
  const rowLimit = matrix.length - 1;
  const colLimit = matrix[0].length - 1;
  let counter = 0;

  for (
    let i = Math.max(0, indexI - 1);
    i <= Math.min(indexI + 1, rowLimit);
    i++
  ) {
    for (
      let j = Math.max(0, indexJ - 1);
      j <= Math.min(indexJ + 1, colLimit);
      j++
    ) {
      if (indexI !== i || indexJ !== j) {
        if (matrix[i][j] === true) {
          counter++;
        }
      }
    }
  }
  return counter;
}

function minesweeper(matrix) {
  const resArray = Array.from(
    Array(matrix.length),
    () => new Array(matrix.length),
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      resArray[i][j] = checkNeighbors(matrix, i, j);
    }
  }

  return resArray;
}
module.exports = minesweeper;
