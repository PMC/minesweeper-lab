import * as React from "react";
import { Icon } from "@iconify/react";
export function MineButton({
  columns,
  rows,
  isBomb,
  isPressed,
  isFlagged,
  value,
}) {
  return (
    <button type="button" className="gameCell">
      <center>
        <Icon icon="pepicons-pop:flag-straight" width="18" height="18" />
      </center>
    </button>
  );
}
