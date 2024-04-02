import { useReducer, useState } from 'react'
import '../styles/RandomNumberGenerator.css'
import PlayersDetail from './PlayersDetail'

const RandomNumberGenerator = ({ shared,setSharedForResult,toggleResult }) => {  
	const colors = ["black","red","green","blue","purple","darkblue","orange","pink","brown"] 
	const {players,allGuesses} = shared  
	const [displayedNumbers, setDisplayedNumbers] = useState([])
	const [clicked, setClicked] = useState("visible")  
	const [spiner,setSpiner] = useState()
	const [mystyle,setMystyle] = useState()
	const [counter,setCounter] = useState() 
	// Function to generate 20 random and distinct numbers	
	const generateNumbers = () => { 
		let generatedNumbers = []
		while (generatedNumbers.length < 20) {
			const randomNumber = Math.floor(Math.random() * 90) + 1
			if (!generatedNumbers.includes(randomNumber)) {
				generatedNumbers.push(randomNumber)
			}
		}  
		displayNumbersSequentially(generatedNumbers)
		setClicked("none")
	}

	// Function to display numbers one by one with delay
	const displayNumbersSequentially = (temp) => {
		let timeout = 2000
		let index = 1
		setDisplayedNumbers([temp[0]])
		setSpiner(temp[0])
		setCounter(`${1}/20`)
		setMystyle({backgroundColor:`${colors[Math.floor(Math.random()*colors.length)]}`})
		const interval = setInterval(() => { 
			setSpiner(temp[index]) 
			index++ 
			setCounter(`${index}/20`)
			setMystyle({backgroundColor:`${colors[Math.floor(Math.random()*colors.length)]}`})
			setDisplayedNumbers([...temp.slice(0, index)])
			//index++  
			if (index === temp.length) {
				getCorrectGuesses(players,allGuesses,temp)
				clearInterval(interval) 
			} 
		}, timeout)  
		const spinerInterval = setTimeout(()=>{
			// setSpiner("")
			setCounter(<span>spining completed</span>)
			setMystyle({display:`none`})
		},timeout*20)
	}

	const getCorrectGuesses = (players, guesses, generated) => {
		let tempCorrectGuesses = []
		players.forEach((player, playerIdx) => {
			let guessCount = 0 
			guesses[playerIdx].forEach((guess) => {
				if (generated.includes(Number(guess))) {
					guessCount++
				}
			})
			tempCorrectGuesses.push({ player, guessCount }) 
		})   
		let winner = tempCorrectGuesses[0]
		tempCorrectGuesses.forEach((detail,index)=>{
			if(winner.guessCount < detail.guessCount){
				winner = detail
			}
		})
		setSharedForResult({tempCorrectGuesses,winner})  
	}  
	return (
		<div className="random-number-generator">
			<div className="spiner" style={mystyle}>
				<p >{spiner}</p> 
			</div>
		<div className="counter">
			<p>{counter}</p>
		</div>
			<div className="numbers">
				{
					displayedNumbers.map((number, index) => (
						<div key={index} className="number">
							{number}
						</div>
					))}
			</div>
			<button onClick={()=>{
				generateNumbers()
				toggleResult()
			}} style={{ display: `${clicked}` }}>Generate Numbers</button> 
		</div>
	)
}

export default RandomNumberGenerator