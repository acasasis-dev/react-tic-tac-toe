import { useState } from "react"


export default function Player({ name, symbol, isActive, onRename }) {
	const [ isEditing, setIsEditing ] = useState(false);
	const [ playerName, setPlayerName ] = useState(name)

	function handleClick() {
		setIsEditing((editing) => !editing);

		if(isEditing) {
			onRename(symbol, playerName);
		}
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	return (
		<li className={ isActive? 'active' : undefined }>
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