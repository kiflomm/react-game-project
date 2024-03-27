import { useState } from 'react' 
const PlayersDetail = ({shared,toggleRNG}) => {
    const {players,allGuesses} = shared
  return (
    <div className="players-detail">
                    <h1>This is the list of the registered players</h1>
                    <table>
                        <tbody>
                            <tr><th>Name</th><th>Guesses</th></tr>
                            {
                                players.map((current, index) => (
                                    <tr key={index}>
                                        <td>{current}</td>
                                        <td>
                                            <table >
                                                <tbody>
                                                    <tr>
                                                        {
                                                            allGuesses[index].map((now, id) => (

                                                                <td key={id}><div className="numbers">{now}</div></td>

                                                            ))}
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button onClick={toggleRNG}>start game</button>
                </div>
  )
}

export default PlayersDetail