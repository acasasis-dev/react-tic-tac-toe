const gameState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function GameBoard() {
	return (
		<ol id="game-board">
			{ gameState.map((row, index) => {
				return (
					<li key={ index }>
						<ol>
							{ row.map((symbol, colIndex) => {
								return (
									<li key={ colIndex }>
										<button>{ symbol }</button>
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