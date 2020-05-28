import React from 'react'
import Timer from './timer/Timer'
import Coins from './coins/Coins'
import GameAlert from './Alert'

const GameDetails = () => {

    return(
       <div className="details-container" >
           <GameAlert />
           <Timer />
           <Coins />
       </div>
    )
}

export default GameDetails