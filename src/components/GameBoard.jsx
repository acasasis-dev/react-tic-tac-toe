import { useState } from "react";


const initialGameState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
	let gameState = initialGameState;

	for(const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameState[row][col] = player;
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
										<button onClick={ () => onSelectSquare(rowIndex, colIndex) }>{ symbol }</button>
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