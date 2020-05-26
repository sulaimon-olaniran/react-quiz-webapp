import React from 'react'
import Timer from './timer/Timer'
import Coins from './coins/Coins'

const GameDetails = () => {

    return(
       <div className="details-container" >
           <Timer />
           <Coins />
       </div>
    )
}

export default GameDetails