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
  return matrix;
}
