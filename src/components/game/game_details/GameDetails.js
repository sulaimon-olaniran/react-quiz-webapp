import React from 'react'
import Timer from './timer/Timer'
import Coins from './coins/Coins'
import GameAlert from './Alert'

const GameDetails = ({ coins, redirectTo }) => {

    return (
        <div className="details-container" >
            <GameAlert />
            <Timer redirectTo={redirectTo} />
            <Coins coins={coins} />
        </div>
    )
}

export default GameDetails