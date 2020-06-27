import React, { createContext, useState, useContext } from 'react'

export const GameContext = createContext()

const GameContextProvider = (props) => {
    const [removedIndex, setRemovedIndex] = useState([])
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false)
    const [usedHint, setUsedHint] = useState(false)
    const [coins, setCoins] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [rightAnswer, setRightAnswer] = useState(false)

    const [answeredRight, setAnsweredRight] = useState(0)
    const [answeredWrong, setAnsweredWrong] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [fiftyUsed, setFiftyUsed] = useState(0)
    const [hintsUsed, setHintsUsed] = useState(0)
    const [coinsSpent, setCoinsSpent] = useState(0)
    const [points, setPoints] = useState(0)
    const [attempts, setAttempts] = useState(0)

    const [disableLeague, setDisableLeague] = useState(false)

    const targetDate = "07 01, 2020"

    const countDownDate = new Date(`${targetDate} 00:00:00`).getTime()

    const showOptions = () => {
        const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
        options.forEach((option, index) => {
            option.style.visibility = "visible"
        })
    }

    const clearData = () => {
        setAttempts(0)
        setCoinsSpent(0)
        setAnsweredRight(0)
        setAnsweredWrong(0)
        setQuestionNumber(0)
        setFiftyUsed(0)
        setHintsUsed(0)
        setPoints(0)
    }
    return (
        <GameContext.Provider value={{
            removedIndex, setRemovedIndex, rightAnswer, questionNumber, setQuestionNumber, showOptions,
            setRightAnswer, usedFiftyFifty, setUsedFiftyFifty, answeredWrong, setAnsweredWrong, usedHint,
            coins, setCoins, wrongAnswer, setWrongAnswer, answeredRight, setAnsweredRight, setUsedHint,
            fiftyUsed, setFiftyUsed, hintsUsed, setHintsUsed, points, setPoints, coinsSpent, setCoinsSpent,
            attempts, setAttempts, clearData, disableLeague, setDisableLeague, countDownDate
        }}>
            {props.children}
        </GameContext.Provider>
    )

}


export default GameContextProvider