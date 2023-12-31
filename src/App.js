import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // state for play history
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // ???? why is this useState holding the Array explicitly in '[]' compared to the state in
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  // state for determining player
  const xIsNext = currentMove % 2 === 0;
  // render current move
  const currentSquares = history[currentMove];

  // function to determine if there is a winner or who's turn is next
  // track new history when a previous move is visited
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // play history
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
