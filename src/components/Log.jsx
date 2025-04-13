export default function Log({ turns }) {
	return (
		<ol id="log">
			{ turns.map(turn => {
				const { square, player } = turn;
				const { row, col } = square;

				return (
					<li key={ `${row}${col}` }>{ player } took square { row }, { col }</li>
				)
			}) }
		</ol>
	);
}