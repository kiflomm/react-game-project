import './GameResult.css'
const GameResult = ({sharedForResult}) =>{   
    const {tempCorrectGuesses,winner} = {...sharedForResult}
    return (
        <>
        <h1>The winner is: {winner.player} with {winner.guessCount} matches</h1>
        <div className="result-container">
            {
                tempCorrectGuesses.map((playerDetail,index)=>(
                    <li key={index}>
                        {`${playerDetail.player} has ${playerDetail.guessCount} matches`}
                    </li>
                ))
            }
        </div>
        </>
        
    )
}
export default GameResult