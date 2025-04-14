export default function GameBoard({ onSelectSquare, board }) {
	return (
		<ol id="game-board">
			{ board.map((row, rowIndex) => {
				return (
					<li key={ rowIndex }>
						<ol>
							{ row.map((symbol, colIndex) => {
								return (
									<li key={ colIndex }>
										<button 
											onClick={ () => onSelectSquare(rowIndex, colIndex) }
											disabled={ symbol? true: false }
										>
												{ symbol }
										</button>
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