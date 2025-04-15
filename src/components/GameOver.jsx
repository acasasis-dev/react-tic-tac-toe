export default function GameOver({ winner }) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{ winner? 
				<p>{ winner } WON THE GAME !!!</p> :
				<p>DRAW !!!</p>
			}
			<p>
				<button>Rematch</button>
			</p>
		</div>
	);
}