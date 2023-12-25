const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = Array(rows).fill().map(() => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      for (let a = Math.max(0, i - 1); a <= Math.min(rows - 1, i + 1); a++) {
        for (let b = Math.max(0, j - 1); b <= Math.min(cols - 1, j + 1); b++) {
          if (matrix[a][b]) {
            res[i][j]++;
          }
        }
      }
      if (matrix[i][j]) {
        res[i][j]--;
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
