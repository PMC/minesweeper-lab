import { MineButton } from "./MineButton";
import { createGameBoard } from "./Logic/createGameBoard";
import { gameReducer } from "./Logic/gameReducer";

import * as React from "react";
const BOARD_COLS = 25;
const BOARD_ROWS = 10;
const BOARD_BOMBS = 60;

export default function GameBoard() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createGameBoard(BOARD_COLS, BOARD_ROWS, BOARD_BOMBS),
  });
  return (
    <>
      {gameState.board.map((row, rowIdx) => (
        <div className="boardRow" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <MineButton {...cell} key={cellIdx} />
          ))}
        </div>
      ))}
    </>
  );
}
