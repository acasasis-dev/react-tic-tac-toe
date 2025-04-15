import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import WINNING_COMBINATIONS from "./winning-combinations";
import GameOver from "./components/GameOver";


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
  const [ playerNames, setPlayerNames ] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveAcivePlayer(gameTurns);

  let gameState = [...initialGameState.map(row => [...row])];

	for(const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameState[row][col] = player;
	}

  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const currentCheck = [];
    for(const c of combination) {
      const { row, column: col } = c;
      currentCheck.push(gameState[row][col]) 
    }

    const currentCheckSet = [...new Set(currentCheck)];

    if(currentCheckSet.length === 1 && currentCheckSet[0] !== null) {
      winner = playerNames[currentCheckSet[0]];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerRename(symbol, newName) {
    setPlayerNames(prevPlayerNames => {
      return {
        ...prevPlayerNames,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ activePlayer === 'X' } onRename={ handlePlayerRename } />
          <Player name="Player 2" symbol="O" isActive={ activePlayer === 'O' } onRename={ handlePlayerRename } />
        </ol>
        { (winner || isDraw ) && <GameOver winner={ winner } onSelectRematch={ handleRematch} /> }
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
