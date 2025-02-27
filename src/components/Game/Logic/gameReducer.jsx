export function gameReducer(state, action) {
  const { type, row, col } = action;
  let cell = state.board[row][col];
  switch (type) {
    case "HANDLE_CELL": {
      if (cell.isFlagged || cell.isPressed) {
        // return current state if Flagged or Pressed, eg no change
        return {
          ...state,
        };
      }
      if (cell.isBomb) {
        return {
          ...state,
          board: revealBoard(state.board),
          isGameOver: true,
        };
      } else if (cell.value === 0) {
        return {
          ...state,
          board: revealEmptyCells(row, col, state.board),
        };
      } else {
        return {
          ...state,
          board: revealCell(row, col, state.board),
        };
      }
    }
    case "HANDLE_FLAG": {
      if (!cell.isPressed) {
        return {
          ...state,
          board: handleFlagCell(row, col, state.board),
        };
      } else {
        return {
          ...state,
        };
      }
    }
  }
}

function handleFlagCell(row, col, board) {
  const newBoard = board.slice();
  const cell = newBoard[row][col];
  const toggle = !cell.isFlagged;
  const newCell = {
    ...cell,
    isFlagged: toggle,
  };
  newBoard[row][col] = newCell;
  return newBoard;
}

function revealCell(row, col, board) {
  const newBoard = board.slice();
  const cell = newBoard[row][col];
  const newCell = {
    ...cell,
    isPressed: true,
  };
  newBoard[row][col] = newCell;
  return newBoard;
}

function revealEmptyCells(row, col, board) {
  const newBoard = board.slice();
  const stack = [[row, col]];

  while (stack.length > 0) {
    const [row, col] = stack.pop();
    const neighbors = getNeighbors(row, col, newBoard);

    for (const neighbor of neighbors) {
      const [row, col] = neighbor;
      if (newBoard[row][col].isPressed) continue;
      if (!newBoard[row][col].isBomb) {
        newBoard[row][col].isPressed = true;
        if (newBoard[row][col].value > 0) {
          continue;
        }
        stack.push(neighbor);
      }
    }
  }
  return newBoard;
}

export function getNeighbors(row, col, matrix) {
  const height = matrix.length;
  const width = matrix[row].length;
  const neighbors = [];

  if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
  if (row + 1 < height) neighbors.push([row + 1, col]); // DOWN
  if (col + 1 < width) neighbors.push([row, col + 1]); // RIGHT
  if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT

  if (row - 1 >= 0 && col - 1 >= 0) neighbors.push([row - 1, col - 1]); // UP-LEFT
  if (row - 1 >= 0 && col + 1 < width) neighbors.push([row - 1, col + 1]); // UP-RIGHT
  if (row + 1 < height && col + 1 < width) neighbors.push([row + 1, col + 1]); // DOWN-RIGHT
  if (row + 1 < height && col - 1 >= 0) neighbors.push([row + 1, col - 1]); // DOWN-LEFT

  return neighbors;
}

function revealBoard(board) {
  const newBoard = board.slice();
  for (let row = 0; row < newBoard.length; row++) {
    for (let col = 0; col < newBoard[row].length; col++) {
      const cell = newBoard[row][col];
      const newCell = {
        ...cell,
        isPressed: true,
      };
      newBoard[row][col] = newCell;
    }
  }
  return newBoard;
}
