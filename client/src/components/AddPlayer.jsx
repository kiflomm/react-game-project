//This component has no bugs

import { useState } from 'react';
import './AddPlayer.css'; 
const AddPlayer = ({setShared}) => { 

    //for the final return
    const [players, setPlayers] = useState([])
    const [allGuesses, setAllGuesses] = useState([])
    //for the input fields 
    const [player, setPlayer] = useState('')
    const [guess, setGuesse] = useState([])
    //function to set the players and allGuesses
    const handleBothPNG = (event) => {
        event.preventDefault()
        setPlayers(prev => [...prev, player])
        setAllGuesses(prev => [...prev, guess])
        setShared({players:[...players, player],allGuesses:[...allGuesses, guess]})
        setPlayer('')
        setGuesse([])  
    }

    return (
        <>
        <div className="add-player-container">
            <h1 className="add-player-title">Add players Here</h1>
            <div className="add-player-description">Enter the name of the player with the guesses down in the input fields and hit enter </div>
            <form className="form-container">
                <div className="input-group">
                    <label htmlFor="players" className="label">player name</label>
                    <input id="player" className="input" placeholder="Enter name" value={player} onChange={(e) => { setPlayer(e.target.value) }} />
                </div>
                <div className="input-group">
                    <label htmlFor="numbers" className="label">choose numbers</label>
                    <input id="numbers" className="input" placeholder="Enter numbers" value={guess} onChange={(e) => {
                        let value = (e.target.value).split(',')
                        setGuesse(value)
                    }} />
                </div>
                <div className="add-clear-container">
                    <button type='submit' className="add-button" onClick={handleBothPNG}>Add </button>
                    <button className="clear-button" onClick={(e) => {
                        e.preventDefault()
                        setPlayer('')
                        setGuesse([])
                    }}>clear</button> 
                </div>
            </form>   
        </div>  
        </>
    );
}

export default AddPlayer;
