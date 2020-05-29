import React, { useContext, useRef } from 'react'
import { GameContext } from '../../../../../contexts/GameContext'
import coin_icon from './assets/coin_icon.png'
import success from './assets/success.wav'
import error from './assets/error.wav'


const Hints = ({ answer }) => {
    const { removedIndex, setRemovedIndex, coins, setCoins, setUsedHint, usedFiftyFifty } = useContext(GameContext)
    const successRef = useRef()
    const errorRef = useRef()

    const handleHint = () => {
        if ( coins >= 20 && usedFiftyFifty === false ) {
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
                        if (index === randomIndex ) {
                            option.style.visibility = "hidden"
                            setCoins(prev => prev - 20)
                            setUsedHint(true)
                            successRef.current.play()
                            setRemovedIndex(prev => prev.concat(randomIndex))
                        }
                    })
                    break
                }
                if (removedIndex.length >= 3) {
                    break
                }
            }
        }else{
            errorRef.current.play()
        }
    }



    return (

        <div onClick={handleHint} className="hints-container" >
            <React.Fragment>
                <audio src={success} ref={successRef}></audio>
                <audio src={error} ref={errorRef}></audio>
            </React.Fragment>
            <p>Hints</p>
            <p>20 <img src={coin_icon} alt="coin" /></p>
        </div>

    )
}

export default Hints