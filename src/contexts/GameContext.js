import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({children}) => {
    const [ removedIndex, setRemovedIndex] = useState([])
    const [ usedFifty, setUsedFiftyFifty ] = useState(false)
    const [ coins, setCoins ] = useState(100)

    
    return (
        <GameContext.Provider value={{ removedIndex, setRemovedIndex,
            usedFifty, setUsedFiftyFifty, coins, setCoins
        }}>
            {children}
        </GameContext.Provider>
    )
}



export default GameContextProvider