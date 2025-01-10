export function gameReducer(state, action) {
  const { type, row, col } = action;

  // handle events when clicking
  switch (type) {
    case "HANDLE_CELL": {
      if (state.board[row][col].isBomb) {
        return {
          ...state,
          // board: flipAllCells(state.board),
        };
      } else if (state.board[row][col].vale === 0) {
        //show all cells that are 0
        return {
          ...state,
        };
      }
    }
  }
}
