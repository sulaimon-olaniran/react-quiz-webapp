import React, { useContext, useRef } from 'react'
import { GameContext } from '../../../../../contexts/GameContext'
import coin_icon from './assets/coin_icon.png'
import success from './assets/success.wav'
import error from './assets/error.wav'

const FiftyFifty = ({ answer }) => {
    const { coins, setCoins, usedFiftyFifty, setUsedFiftyFifty, setCoinsSpent, setFiftyUsed, removedIndex, setRemovedIndex } = useContext(GameContext)
    const successRef = useRef()
    const errorRef = useRef()

    const handleFiftyFifty = () => {
        if (coins >= 30 && usedFiftyFifty === false && removedIndex.length < 2) {

            const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
            const randomIndexes = []
            let answerIndex
            let count = 0

            options.length > 2 && options.forEach((option, index) => {
                if (option.innerText.toLowerCase() === answer.toLowerCase()) {
                    answerIndex = index
                }

            })

            do {
                const randomIndex = Math.round(Math.random() * 3)
                if (randomIndex !== answerIndex) {
                    if (
                        randomIndexes.length < 2 && !randomIndexes.includes(randomIndex)
                        && !randomIndexes.includes(answerIndex) && !removedIndex.includes(randomIndex)
                    ) {
                        randomIndexes.push(randomIndex)
                        count++
                    } 
                    
                    else {
                        const newRandomIndex = Math.round(Math.random() * 3)
                        if (
                            newRandomIndex !== answerIndex && !randomIndexes.includes(newRandomIndex)
                            && !randomIndexes.includes(answerIndex) && !removedIndex.includes(newRandomIndex)
                        ) {
                            randomIndexes.push(newRandomIndex)
                            count++
                            break
                        }
                    }
                }

            } while (count < 2)

            options.length && options.forEach((option, index) => {
                if (randomIndexes.includes(index)) {
                    setRemovedIndex(randomIndexes)
                    setUsedFiftyFifty(true)
                    option.style.visibility = "hidden"
                }
            })
            successRef.current.play()
            setCoins(prev => prev - 30)
            setCoinsSpent(prev => prev + 30)
            setFiftyUsed(prev => prev + 1)
        } else {
            errorRef.current.play()
        }

    }

    return (
        <div onClick={handleFiftyFifty} className="fifty-container" >
            <React.Fragment>
                <audio src={success} ref={successRef}></audio>
                <audio src={error} ref={errorRef}></audio>
            </React.Fragment>
            <p>50 : 50</p>
            <p>30 <img src={coin_icon} alt="coin" /></p>
        </div>
    )
}

export default FiftyFifty