import "../styles/Dice.css"
import React, { useState } from 'react';

const RandomDice = () => {
    const [diceNumber, setDiceNumber] = useState(1);
      
    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNum);
    }
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    return(
        <div>
            <div style={styles.container}>
            <div style={styles.dice}>{diceFaces[diceNumber - 1]}</div>
            <button onClick={rollDice} style={styles.button}>Roll Dice</button>
            </div>
        </div>
    )
}
const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'sans-serif',
    },
    dice: {
      fontSize: '100px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      cursor: 'pointer',
    }
  };
export default RandomDice