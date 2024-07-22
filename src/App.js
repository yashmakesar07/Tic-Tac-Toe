import React, { useState } from "react";
import Square from "./Component/square";

const App = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleSquareClick = (index) => {
    if (winner || gameState[index] !== null) {
      return; // Do nothing if game is over or square is already clicked
    }

    const newValue = gameState.slice(); // Create a copy of the array

    newValue[index] = player === 1 ? "X" : "O"; // Update the specific index
    setGameState(newValue); // Set the state with the updated array

    // Check for winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        newValue[a] &&
        newValue[a] === newValue[b] &&
        newValue[a] === newValue[c]
      ) {
        setWinner(newValue[a]);
        return;
      }
    }

    // Check for draw
    if (newValue.every((val) => val !== null)) {
      setWinner("Draw");
    } else {
      setPlayer(player === 1 ? 2 : 1); // Switch player
    }
  };

  const restartGame = () => {
    setGameState(Array(9).fill(null));
    setPlayer(1);
    setWinner(null);
  };

  return (
    <div>
      <div className="flex justify-center bg-blue-400 text-zinc-700">
        <h1 className="p-4 text-2xl font-medium">Tic Tac Toe</h1>
      </div>
      <div className="flex flex-col h-screen items-center justify-center bg-gray-800">
        <h1 className="mb-2 font-semibold text-2xl text-gray-300">
          {winner
            ? winner === "Draw"
              ? "It's a Draw!"
              : `Winner: ${winner}`
            : `Next Player: ${player === 1 ? "X" : "O"}`}
        </h1>
        <div className="bg-gray-600">
          <Square value={gameState} onSquareClick={handleSquareClick} />
        </div>
        <div className="m-5 bg-blue-500 p-2 rounded-lg">
          <button onClick={restartGame} className="text-white">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
