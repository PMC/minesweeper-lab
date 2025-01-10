import { createGameCell } from "./createGameCell";

export function createGameBoard(width, height, bombs) {
  const matrix = [];

  for (let row = 0; row < height; row++) {
    const rows = [];
    for (let col = 0; col < width; col++) {
      rows.push(createGameCell(col, row));
    }
    matrix.push(rows);
  }

  //TODO: create bombs
  //TODO: update value in cells

  createBombs(matrix, bombs);
  return matrix;
}

function createBombs(gameBoard, bombs) {
  let bombsLeft = bombs;
  let maxRows = gameBoard.length;
  let maxCols = gameBoard[0].length;

  //Using while loop because if bomb is already defined then we need to continue without
  //reducing number of bombs left
  while (bombsLeft > 0) {
    let bombAtRow = Math.floor(Math.random() * maxRows);
    let bombAtCol = Math.floor(Math.random() * maxCols);

    if (!gameBoard[bombAtRow][bombAtCol].isBomb) {
      gameBoard[bombAtRow][bombAtCol].isBomb = true;

      increaseSurroundingCells(bombAtRow, bombAtCol, gameBoard);

      bombsLeft--;
    }
  }
}

export function increaseSurroundingCells(row, col, gameBoard) {
  let maxRows = gameBoard.length;
  let maxCols = gameBoard[0].length;

  if (row - 1 >= 0) gameBoard[row - 1][col].value++;
  if (row + 1 < maxRows) gameBoard[row + 1][col].value++;
  if (col - 1 >= 0) gameBoard[row][col - 1].value++;
  if (col + 1 < maxCols) gameBoard[row][col + 1].value++;

  if (row - 1 >= 0 && col - 1 >= 0) gameBoard[row - 1][col - 1].value++;
  if (row - 1 >= 0 && col + 1 < maxCols) gameBoard[row - 1][col + 1].value++;

  if (row + 1 < maxRows && col - 1 >= 0) gameBoard[row + 1][col - 1].value++;
  if (row + 1 < maxRows && col + 1 < maxCols)
    gameBoard[row + 1][col + 1].value++;
}

//  b
// bxb
//  b
