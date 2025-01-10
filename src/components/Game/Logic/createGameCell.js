export function createGameCell(col, row) {
  return {
    col,
    row,
    isBomb: false,
    isRevealed: false,
    isFlagged: false,
    value: 0,
  };
}
