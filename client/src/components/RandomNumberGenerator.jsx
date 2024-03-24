import React, { useState } from 'react';
import './RandomNumberGenerator.css'
const RandomNumberGenerator = () => {
  const [numbers, setNumbers] = useState([]);
  const [displayedNumbers, setDisplayedNumbers] = useState([]);

  // Function to generate 20 random and distinct numbers
  const generateNumbers = () => {
    let generatedNumbers = [];
    while (generatedNumbers.length < 20) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber);
      }
    }
    setNumbers(generatedNumbers);
    displayNumbersSequentially(generatedNumbers)
  }
  // Function to display numbers one by one with delay
  const displayNumbersSequentially = (temp) => { 
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedNumbers((prevNumbers) => [...temp.slice(0,index+1)]); 
    index++;
      if (index === temp.length) {
        clearInterval(interval);
      }
      
    }, 2000); // Adjust delay time (in milliseconds) here
  };

  return (
    <div className="random-number-generator">
      <div className="spinner">
        {/* Your spinner component goes here */}
      </div>
      <button onClick={generateNumbers}>Generate Numbers</button>
      <div className="numbers"> 
        { 
            displayedNumbers.map((number, index) => (
          <div key={index} className="number">
            {number}
          </div>
        ))}
      </div>
      {/* <div className='numbers'>{numbers.map((num,id)=> (<div className='number' key={id}>{num}</div>))}</div> */}
    </div>
  );
};

export default RandomNumberGenerator;