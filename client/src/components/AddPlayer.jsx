import { useState } from 'react';
import '../styles/AddPlayer.css'; 

const AddPlayer = ({setShared}) => { 
    //for the final return
    const [players, setPlayers] = useState([])
    const [allGuesses, setAllGuesses] = useState([])
    //for the input fields 
    const [player, setPlayer] = useState('')
    const [guess, setGuess] = useState([])
    const [alert1,setAlert1] = useState("")
    const [alert2,setAlert2] = useState("")
    //function to set the players and allGuesses
    const handleBothPNG = (event) => {
        let condition1 = !players.includes(player)  && player !== ""
        let condition2 = guess.length === 5 && guess.every((num) => Number(num) >= 1 && Number(num) <= 90)
        if(condition1 && condition2){ 
            setPlayers(prev => [...prev, player])
            setAllGuesses(prev => [...prev, guess])
            setShared({players:[...players, player],allGuesses:[...allGuesses, guess],setAllGuesses})
            setPlayer('')
            setGuess([]) 
        }else if(condition1){
          setAlert2("Please enter five integers between 1 and 90 for the guesses")
          setGuess([])  
        }else if(condition2){ 
          setAlert1("Please try another name")
          setPlayer('')
        }else{ 
          setAlert1("Please try another name")
          setAlert2("Please enter five integers between 1 and 90 for the guesses") 
          setPlayer('')
          setGuess([])  
        }
        event.preventDefault()
    }

    return (
        <>
        <div className="add-player-container">
            <h1 className="add-player-title">Add players Here</h1>
            <div className="add-player-description">Enter the name of the player with the guesses down in the input fields and hit enter </div>
            <form className="form-container" name='add-player'>
                <div className="input-group">
                    <label htmlFor="player" className="label">player name</label>
                    <input id="player" className="input" placeholder="Enter name" value={player} onChange={(e) => { 
                      setPlayer(e.target.value) 
                      setAlert1('')
                    }} />
                    <div className='alert'>{alert1}</div>
                </div>
                <div className="input-group">
                    <label htmlFor="guess" className="label">choose numbers</label>
                    <input id='guess' className= "input"  
                      onChange={(e) => {
                        let value = e.target.value.split(" ")
                        setAlert2('')
                        setGuess(value)
                    }} value={guess.join(" ")} placeholder="Enter your guesses" 
                    />
                    <div style={{margin:"auto",textAlign:"center"}}>
                      {guess.map((one,index)=>(
                        <span key={index} style={{border:"1px solid red",borderRadius:"5px"}}>{one}</span>
                      ))}
                      {alert2}
                    </div>
                </div>
                <div className="add-clear-container">
                    <button type='submit' className="add-button" onClick={handleBothPNG}>Add</button>
                    <button className="clear-button" onClick={(e) => {
                        e.preventDefault()
                        setPlayer('')
                        setGuess([])
                    }}>clear</button> 
                </div>
            </form>   
        </div>  
        </>
    );
}

export default AddPlayer;