import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({children}) => {
    const [ removedIndex, setRemovedIndex] = useState([])
    const [ usedFifty, setUsedFiftyFifty ] = useState(false)
    const [ usedHint, setUsedHint ] = useState(false)
    const [ coins, setCoins ] = useState(100)
    const [ wrongAnswer, setWrongAnswer] = useState(false)
    const [ rightAnswer, setRightAnswer] = useState(false)
    const [ answeredRight, setAnsweredRight] = useState(0)
    const [ answeredWrong, setAnsweredWrong ] = useState(0)
    const [ timer, setTimer ] = useState(120)

    
    return (
        <GameContext.Provider value={{
            removedIndex, setRemovedIndex, rightAnswer,
            setRightAnswer, usedFifty, setUsedFiftyFifty, answeredWrong, setAnsweredWrong, usedHint, timer,
            coins, setCoins, wrongAnswer, setWrongAnswer, answeredRight,setAnsweredRight, setUsedHint, setTimer
        }}>
            {children}
        </GameContext.Provider>
    )
}



export default GameContextProvider