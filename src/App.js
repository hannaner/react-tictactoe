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

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
