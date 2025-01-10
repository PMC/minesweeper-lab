import * as React from "react";
import { Icon } from "@iconify/react";

const IconFlag = () => {
  return <Icon icon="pepicons-pop:flag-straight" width="18" height="18" />;
};

export default function MineButton({
  row,
  col,
  isBomb,
  isPressed,
  isFlagged,
  value,
  onCellClick,
}) {
  return (
    <button className="gameCell" onClick={() => onCellClick(row, col)}>
      {/* {IconFlag()} 💣 */}
      {!isPressed && (isBomb ? "💣" : value ? value : null)}
    </button>
  );
}
