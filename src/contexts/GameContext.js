import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()

const GameContextProvider = ({ children }) => {

    const timeFormat = (time) => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
    }

    

    return (
        <GameContext.Provider
            value={{



            }}
        >
            {children}
        </GameContext.Provider>
    )

}

export default GameContextProvider