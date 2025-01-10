export function gameReducer(state, action) {
  const { type, row, col } = action;

  state.board[row][col].isPressed = true;
  return { ...state };
}
