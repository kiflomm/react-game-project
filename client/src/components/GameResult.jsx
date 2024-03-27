import './GameResult.css'
const GameResult = ({sharedForResult}) =>{   
    return (
        <div className="result-container">
            {
                sharedForResult.map((playerDetail,index)=>(
                    <li key={index}>
                        {`${playerDetail.player} has ${playerDetail.guessCount} matches`}
                    </li>
                ))
            }
        </div>
    )
}
export default GameResult