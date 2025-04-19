import "../styles/Dice.css"

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

export default RandomDice