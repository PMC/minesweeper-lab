export function createGameCell(columns, rows) {
  return {
    columns,
    rows,
    isBomb: false,
    isRevealed: false,
    isFlagged: false,
    value: 0,
  };
}
