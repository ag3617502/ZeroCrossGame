import React, { useState } from "react";
import "../App.css";
function Game(props) {
  const [isButton, setIsButton] = useState(false);

  return (
    <button
      disabled={isButton || props.finish}
      onClick={() => {
        props.handlePlay(props.item);
        setIsButton(true);
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {props.playerX.values.some((position) => position === props.item) && (
        <p style={{ color: props.playerX.color, fontSize: 20 }}>
          {props.playerX.player}
        </p>
      )}
      {props.playerY.values.some((position) => position === props.item) && (
        <p style={{ color: props.playerY.color, fontSize: 20 }}>
          {props.playerY.player}
        </p>
      )}
    </button>
  );
}
export default Game;
