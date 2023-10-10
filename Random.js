import React, { useState } from 'react';

function Random() {
  // Initialize the state for the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate a random number
  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default Random;
