import * as React from "react";
import { Icon } from "@iconify/react";

const IconFlag = () => {
  return <Icon icon="pepicons-pop:flag-straight" width="18" height="18" />;
};

export function MineButton({
  rows,
  columns,
  isBomb,
  isPressed,
  isFlagged,
  value,
}) {
  return (
    <button type="button" className="gameCell">
      <center>
        {/* {IconFlag()} 💣 */}
        {value}
      </center>
    </button>
  );
}
