import React, { useContext } from 'react'
//import StarsIcon from '@material-ui/icons/Stars'
import { GameContext } from '../../../../../contexts/GameContext'
import coin_icon from './assets/coin_icon.png'

const FiftyFifty = ({ answer }) => {
     const { usedFifty, setUsedFiftyFifty, coins, setCoins } = useContext(GameContext)

    const handleFiftyFifty = () =>{
        if ( usedFifty === false && coins >= 30 ){

            const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
            const randomIndexes = []
            let answerIndex
            let count = 0
            
           options.length > 2 && options.forEach((option, index) => {
                if (option.innerText.toLowerCase() === answer.toLowerCase()) {
                    answerIndex = index
                }

            })

            do{
                const randomIndex = Math.round(Math.random() * 3)
                if( randomIndex !== answerIndex){
                   if(randomIndexes.length < 2 && !randomIndexes.includes(randomIndex) && !randomIndexes.includes(answerIndex)){
                       randomIndexes.push(randomIndex)
                        count++
                   }else{
                    const newRandomIndex = Math.round(Math.random() * 3)
                    if(!randomIndexes.includes(newRandomIndex) && !randomIndexes.includes(answerIndex)){
                        randomIndexes.push(newRandomIndex)
                        count++
                        break
                    }
                   }
                }

            }while(count < 2)

           options.length > 2 && options.forEach((option, index) => {
                if(randomIndexes.includes(index)){
                    option.style.visibility = "hidden"
                }
            })
            setUsedFiftyFifty(true)
            setCoins(prev => prev - 30)

        }
      console.log("Hello from 50/50")
    }

    return (
    <div onClick={handleFiftyFifty} className="fifty-container" >
        <p>50 : 50</p>
        <p>30 <img src={coin_icon} alt="coin" /></p>
    </div>
    )
}

export default FiftyFifty