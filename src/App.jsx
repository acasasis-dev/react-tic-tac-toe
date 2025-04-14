import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning-combinations";


const initialGameState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

function deriveAcivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveAcivePlayer(gameTurns);

  let gameState = initialGameState;

	for(const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameState[row][col] = player;
	}

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const currentPlayer = deriveAcivePlayer(prevGameTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ activePlayer === 'X' } />
          <Player name="Player 2" symbol="O" isActive={ activePlayer === 'O' } />
        </ol>
        <GameBoard 
          onSelectSquare={ handleSelectSquare }
          board={ gameState }
        />
      </div>
      <Log turns={ gameTurns }/>
    </main>
  )
}

export default App
