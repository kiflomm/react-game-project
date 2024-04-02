import { useState, useRef } from 'react';
import '../styles/PlayersDetail.css';

const PlayersDetail = ({ shared, toggleRNG }) => {
const { players, allGuesses, setAllGuesses } = shared;  
const handleChange = (event, rowIndex, columnIndex) => { 

};

  return (
    <div className="players-detail">
      <h1>This is the list of the registered players</h1>
      <table className="players-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Guesses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((current, rowIndex) => (
            <tr key={rowIndex}>
              <td>{current}</td>
              <td>
                <table className="guesses-table">
                  <tbody>
                    <tr>
                      {allGuesses[rowIndex].map((guess, columnIndex) => (
                        <td key={columnIndex}>
                          <input
                            type="text"
                            className="number-input"
                            style={{ padding: '15px' }}
                            onChange={(event) =>
                              handleChange(event, rowIndex, columnIndex)
                            }
                            value={guess}
                            name='guess_displayed'
                          />
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <button className="delete-button">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={toggleRNG}>start game</button>
    </div>
  );
};

export default PlayersDetail;