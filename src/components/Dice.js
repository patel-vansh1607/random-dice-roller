import "../styles/Dice.css"

const RandomDice = () => {
    const [diceNumber, setDiceNumber] = useState(1);
      
    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNum);
    }


    return(
        <div>
            <div>

            </div>
        </div>
    )
}

export default RandomDice