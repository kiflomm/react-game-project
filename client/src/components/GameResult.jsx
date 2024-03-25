const GameResult = ({correctGuesses}) =>{
    return (
        <div className="result-container">
            {
                correctGuesses.map((playerDetail,index)=>(
                    <li key={index}>
                        {`${playerDetail.player} has ${playerDetail.guessCount} matches`}
                    </li>
                ))
            }
        </div>
    )
}
export default GameResult