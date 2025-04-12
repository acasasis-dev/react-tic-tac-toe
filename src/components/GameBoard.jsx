import { useState } from "react";


const intialGameState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
	const [ gameState, setGameState ] = useState(intialGameState);

	function handleSelectSquare(rowIndex, colIndex) {
		setGameState(state => {
			const newState = [ ...state.map(row => [ ...row ])];
			newState[rowIndex][colIndex] = activePlayerSymbol;
			return newState;
		});

		onSelectSquare();
	}

	return (
		<ol id="game-board">
			{ gameState.map((row, rowIndex) => {
				return (
					<li key={ rowIndex }>
						<ol>
							{ row.map((symbol, colIndex) => {
								return (
									<li key={ colIndex }>
										<button onClick={ () => handleSelectSquare(rowIndex, colIndex) }>{ symbol }</button>
									</li>
								);
							}) }
						</ol>
					</li>
				);
			}) }
		</ol>
	);
}