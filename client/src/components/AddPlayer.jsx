import { useState } from 'react';
import './AddPlayer.css';

function AddPlayer() {
    const [player,setPlayer] = useState()
  return (
    <div className="add-player-container"> 
      <h1 className="add-player-title">Add players Here</h1>
      <div className="add-player-description">Enter the name of the player with the guesses down in the input fields and hit enter </div>
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="players" className="label">player name</label>
          <input id="player" className="input" placeholder="Enter name" />
        </div>
        <div className="input-group">
          <label htmlFor="numbers" className="label">choose numbers</label>
          <input id="numbers" className="input" placeholder="Enter numbers" />
        </div>
        <div className='add-clear'>
          <button className="add-button">Add </button>
          <button className="clear-button">clear</button>
        </div>
        
      </div>
    </div>
  );
}

export default AddPlayer;