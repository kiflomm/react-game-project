import React, { useState } from 'react'
import GameResult from './GameResult'
import './RandomNumberGenerator.css'

const RandomNumberGenerator = ({ players, guesses }) => {
	const [numbers, setNumbers] = useState([])
	const [displayedNumbers, setDisplayedNumbers] = useState([])
	const [clicked, setClicked] = useState("visible") 
	const [correctGuesses,setCorrectGuesses] = useState([])
	// Function to generate 20 random and distinct numbers
	const generateNumbers = () => {
		let generatedNumbers = []
		while (generatedNumbers.length < 20) {
			const randomNumber = Math.floor(Math.random() * 100) + 1
			if (!generatedNumbers.includes(randomNumber)) {
				generatedNumbers.push(randomNumber)
			}
		}
		setNumbers(generatedNumbers)
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
				getCorrectGuesses(players,guesses,temp)
				clearInterval(interval)
			}
			
		}, 500) 
		
	}

	const getCorrectGuesses = (players, guesses, generated) => {
		let tempCorrectGuesses = []
		players.forEach((player, playerIdx) => {
			let guessCount = 0
			guesses[playerIdx].forEach((guess, guessIdx) => {
				if (generated.includes(guess)) {
					guessCount++
				}
			})
			tempCorrectGuesses.push({ player, guessCount })
		}) 
		setCorrectGuesses(tempCorrectGuesses)
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
			<button onClick={generateNumbers} style={{ display: `${clicked}` }}>Generate Numbers</button>
			{/* <div className='numbers'>{numbers.map((num,id)=> (<div className='number' key={id}>{num}</div>))}</div> */} 
			<GameResult correctGuesses={correctGuesses}/> 
		</div>
	)
}

export default RandomNumberGenerator