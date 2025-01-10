import MineButton from "./MineButton";
import { createGameBoard } from "./Logic/createGameBoard";
import { gameReducer } from "./Logic/gameReducer";

import * as React from "react";
const BOARD_COLS = 30;
const BOARD_ROWS = 16;
const BOARD_BOMBS = 50;

export default function GameBoard() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createGameBoard(BOARD_COLS, BOARD_ROWS, BOARD_BOMBS),
    isGameOver: false,
    numOfOpenCells: 0,
  });

  function handleOnCellClick(row, col) {
    dispatch({ type: "HANDLE_CELL", row, col });
  }

  return (
    <article>
      {gameState.board.map((row, rowIdx) => (
        <div className="boardRow" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <MineButton
              key={cellIdx}
              onCellClick={handleOnCellClick}
              {...cell}
            />
          ))}
        </div>
      ))}

      <div className="gameOverText">
        {gameState.isGameOver ? "Game Over" : "Minesweeper"}
        ⏲️ 000{" "}
      </div>
    </article>
  );
}
