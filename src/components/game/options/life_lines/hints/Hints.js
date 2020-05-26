import React, { useContext } from 'react'
//import StarsIcon from '@material-ui/icons/Stars'
import { GameContext } from '../../../../../contexts/GameContext'
import coin_icon from './assets/coin_icon.png'



const Hints = ({ answer }) => {
   // const [numOfHints, setNumOfHints] = useState(100)
    const { removedIndex, setRemovedIndex, coins, setCoins } = useContext(GameContext)

    const handleHint = () => {
        if ( coins >= 20) {
            const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
            let answerIndex

            options.forEach((option, index) => {
                if (option.innerText.toLowerCase() === answer.toLowerCase()) {
                    answerIndex = index
                }

            })

            while (true) {
                const randomIndex = Math.round(Math.random() * 3)
                if (randomIndex !== answerIndex && !removedIndex.includes(randomIndex)) {

                    options.forEach((option, index) => {
                        if (index === randomIndex) {
                            option.style.visibility = "hidden"
                            setCoins(prev => prev - 20)
                            setRemovedIndex(prev => prev.concat(randomIndex))
                        }
                    })
                    break
                }
                if (removedIndex.length >= 3) {
                    break
                }
            }
        }
    }



    return (

        <div onClick={handleHint} className="hints-container" >
            <p>Hints</p>
            <p>20 <img src={coin_icon} alt="coin"  /></p>
        </div>

    )
}

export default Hints