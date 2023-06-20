import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // state for determining player
  const [xIsNext, setXIsNext] = useState(true);
  // state for play history
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // ???? why is this useState holding the Array explicitly in '[]' compared to the state in
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const currentSquares = history[history.length - 1];

  // function to determine if there is a winner or who's turn is next
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  // play history
  function jumpTo(nextMove) {}

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li>
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
