import { MineButton } from "./MineButton";
import { createGameBoard } from "../../utils/createGameBoard";
import { gameReducer } from "./gameReducer";

import * as React from "react";
const BOARD_COLS = 20;
const BOARD_ROWS = 20;
const BOARD_BOMBS = 30;

export default function GameBoard() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createGameBoard(BOARD_COLS, BOARD_ROWS, BOARD_BOMBS),
  });
  return (
    <section className="overflow-auto" id="gameBoard">
      {gameState.board.map((row, rowIdx) => (
        <div className="boardRow" key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <MineButton {...cell} key={cellIdx} />
          ))}
        </div>
      ))}
    </section>
  );
}
