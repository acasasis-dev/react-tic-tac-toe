import { useState } from "react"


export default function Player({ name, symbol }) {
	const [ isEditing, setIsEditing ] = useState(false);
	const [ playerName, setPlayerName ] = useState(name)

	function handleClick() {
		setIsEditing((editing) => !editing);
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	return (
		<li>
			<span className="player">
				{ isEditing? 
					<input type="text" onChange={ handleChange } value={ playerName } /> :
					<span className="player-name">{ playerName }</span>
				}
				<span className="player-symbol">{ symbol }</span>
				<button onClick={ handleClick }>{ isEditing? "Save": "Edit" }</button>
			</span>
		</li>
	)
}