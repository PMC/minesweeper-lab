import * as React from "react";
import { Icon } from "@iconify/react";

const IconFlag = () => {
  return <Icon icon="pepicons-pop:flag-straight" width="18" height="18" />;
};

export default function MineButton({
  rows,
  columns,
  isBomb,
  isPressed,
  isFlagged,
  value,
  handleClick,
}) {
  return (
    <button className="gameCell" onClick={() => handleClick(rows, columns)}>
      {/* {IconFlag()} 💣 */}
      {!isPressed && (isBomb ? "💣" : value ? value : null)}
    </button>
  );
}
