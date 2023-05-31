import React from "react";
import Game from "./Game";
import "../App.css";

export default function TicTacToe() {
  const [gameOptions, _] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [playerX, setPlayerX] = React.useState({
    player: "X",
    color: "#3371FF",
    canPLay: true,
    values: [],
    winner: false,
  });
  const [playerY, setPlayerY] = React.useState({
    player: "O",
    color: "#FF3355",
    canPLay: false,
    values: [],
    winner: false,
  });
  const [finish, setFinish] = React.useState(false);
  const sequencesToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [0, 4, 8],
  ];

  function handlePlay(position) {
    if (playerX.canPLay) {
      const newPlayerX = {
        player: "X",
        canPLay: !playerX.canPLay,
        values: [...playerX.values, position],
      };
      setPlayerX(newPlayerX);
      setPlayerY({ ...playerY, canPLay: !playerY.canPLay });
      findeWinner(newPlayerX);
    }
    if (playerY.canPLay) {
      const newPlayerY = {
        player: "O",
        canPLay: !playerY.canPLay,
        values: [...playerY.values, position],
      };
      setPlayerY(newPlayerY);
      setPlayerX({ ...playerX, canPLay: !playerX.canPLay });
      findeWinner(newPlayerY);
    }
  }

  const findeWinner = React.useCallback(
    (player) => {
      if (player.values.length > 2) {
        sequencesToWin.map((possibility) => {
          let count = 0;
          possibility.map((number) => {
            player.values.map((playerValues) => {
              if (number === playerValues) count++;
              if (count === 3) {
                console.log(player.player);
                setFinish(true);
                player.player === "X" &&
                  setPlayerX({ ...player, winner: true });
                player.player === "O" &&
                  setPlayerY({ ...player, winner: true });
              }
            });
          });
        });
      }
    },
    [playerX.values, playerY.values]
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 300, height: 300 }}>
      {gameOptions.map((item) => (
        <div key={item} style={{ width: "33%", height: "33%" }}>
          <Game
            playerX={playerX}
            playerY={playerY}
            item={item}
            finish={finish}
            handlePlay={handlePlay}
          />
        </div>
      ))}
      {finish && playerX.winner && <p> Cross Wins</p>}
      {finish && playerY.winner && <p> Zero Wins</p>}
    </div>
  );
}
