import React, { useContext } from 'react'
import { GameContext } from '../../../../contexts/GameContext'
import coins_icon from './assets/coins_icon.png'


const Coins = () => {
    const { coins } = useContext(GameContext)
    console.log(coins)
    return(

     <div className="coins-container" >
         <p>{coins} <img src={coins_icon} alt="coins" /> </p>
     </div>
    )
}


export default Coins