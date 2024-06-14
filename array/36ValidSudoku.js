/**
 * Hash Map - Matrix
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const boards = 3;
  const [boxes, cols, rows] =
    getBoards(boards); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */

  return searchGrid(
    board,
    boxes,
    cols,
    rows
  ); /* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
};

var initBoard = (rows, cols) =>
  new Array(rows).fill().map(() => new Array(cols).fill(false));

var getBoards = (boards) => {
  const [rows, cols] = [9, 9];

  return new Array(boards).fill().map(() => initBoard(rows, cols));
};

var searchGrid = (board, boxes, cols, rows) => {
  const [_rows, _cols] = [9, 9];

  for (let row = 0; row < _rows; row++) {
    /* Time O(ROWS)*/
    for (let col = 0; col < _cols; col++) {
      /* Time O(COLS)*/
      const char = board[row][col];
      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      const isEmpty = char === ".";
      if (isEmpty) continue;

      const hasMoved =
        boxes[index][char - 1] || cols[col][char - 1] || rows[row][char - 1];
      if (hasMoved) return false;

      rows[row][char - 1] = true; /* Space O(ROWS * COLS)*/
      cols[col][char - 1] = true; /* Space O(ROWS * COLS)*/
      boxes[index][char - 1] = true; /* Space O(ROWS * COLS)*/
    }
  }

  return true;
};

/**
 * Array - Fixed Size
 * Time O(ROWS * COLS) | Space O(CELLS)
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const [boards, cells] = [3, 9];
  const [boxes, rows, cols] = getBoards(
    boards,
    cells
  ); /* Time O(ROWS * COLS) | Space O(CELLS) */

  return searchGrid(
    board,
    boxes,
    rows,
    cols
  ); /* Time O(ROWS * COLS) | Space O(CELLS) */
};

var getBoards = (boards, cells) =>
  new Array(boards).fill().map(() => new Array(cells).fill(0));

/**
 * Validates a Sudoku board.
 * Time O(ROWS * COLS) | Space O(ROWS * COLS)
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  const rows = 9;
  const cols = 9;
  const boxes = new Array(rows).fill().map(() => new Array(cols).fill(false));
  const columns = new Array(rows).fill().map(() => new Array(cols).fill(false));
  const rowSet = new Array(rows).fill().map(() => new Array(cols).fill(false));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      if (char === ".") continue;

      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const num = char - "1"; // Correcting the index calculation for characters '1'-'9'

      if (boxes[index][num] || columns[col][num] || rowSet[row][num]) {
        return false;
      }

      boxes[index][num] = true;
      columns[col][num] = true;
      rowSet[row][num] = true;
    }
  }

  return true;
};
