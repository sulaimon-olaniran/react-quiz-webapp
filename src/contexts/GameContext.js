import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameContextProvider = (props) => {
    const [removedIndex, setRemovedIndex] = useState([])
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false)
    const [usedHint, setUsedHint] = useState(false)
    const [coins, setCoins] = useState(100)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [rightAnswer, setRightAnswer] = useState(false)
    const [answeredRight, setAnsweredRight] = useState(0)
    const [answeredWrong, setAnsweredWrong] = useState(0)
    const [timer, setTimer] = useState(20)

    const playerScore = answeredRight * 4
    const total = answeredWrong + answeredRight

    const endGamePlay = () => {

        const playerStats = {
            score: playerScore,
            right: answeredRight,
            wrong: answeredWrong,
            attempt: total,
            usedCoins: 100 - coins
        }
        console.log(playerStats)
    }


    return (
        <GameContext.Provider value={{
            removedIndex, setRemovedIndex, rightAnswer, endGamePlay,
            setRightAnswer, usedFiftyFifty, setUsedFiftyFifty, answeredWrong, setAnsweredWrong, usedHint, timer,
            coins, setCoins, wrongAnswer, setWrongAnswer, answeredRight, setAnsweredRight, setUsedHint, setTimer
        }}>
            {props.children}
        </GameContext.Provider>
    )
}



export default GameContextProvider