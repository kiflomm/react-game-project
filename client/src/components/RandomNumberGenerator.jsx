import React, { useState } from 'react'
import './RandomNumberGenerator.css'

const RandomNumberGenerator = ({ shared,setSharedForResult,toggleResult }) => {  
	const {players,allGuesses} = shared  
	const [displayedNumbers, setDisplayedNumbers] = useState([])
	const [clicked, setClicked] = useState("visible")  

	// Function to generate 20 random and distinct numbers	
	const generateNumbers = () => {
		let generatedNumbers = []
		while (generatedNumbers.length < 20) {
			const randomNumber = Math.floor(Math.random() * 100) + 1
			if (!generatedNumbers.includes(randomNumber)) {
				generatedNumbers.push(randomNumber)
			}
		}  
		displayNumbersSequentially(generatedNumbers)
		setClicked("none")
	}

	// Function to display numbers one by one with delay
	const displayNumbersSequentially = (temp) => {

		let index = 1
		setDisplayedNumbers([temp[0]])
		const interval = setInterval(() => {

			/* why is there no change whether I put the line index++ before or after the setDisplayNumbers() */
			index++ 
			setDisplayedNumbers([...temp.slice(0, index)])
			//index++  
			if (index === temp.length) {
				getCorrectGuesses(players,allGuesses,temp)
				clearInterval(interval)
			}
			
		}, 500) 
		
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
		setSharedForResult(tempCorrectGuesses)  
	}

	return (
		<div className="random-number-generator">
			<div className="spinnerr">

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
				generateNumbers();toggleResult();
			}} style={{ display: `${clicked}` }}>Generate Numbers</button> 
		</div>
	)
}

export default RandomNumberGenerator