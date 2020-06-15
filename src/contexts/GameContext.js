import React, { createContext, useState } from 'react'
//import { db, auth } from '../firebase/Firebase'
import { withRouter } from 'react-router-dom'
//import firebase from '../firebase/Firebase'

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
    const [questionNumber, setQuestionNumber] = useState(0)
    const [fiftyUsed, setFiftyUsed] = useState(0)
    const [hintsUsed, setHintsUsed] = useState(0)
    const [coinsSpent, setCoinsSpent] = useState(0)
    const [points, setPoints] = useState(0)
    const [attempts, setAttempts] = useState(0)


    const showOptions = () => {
        const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
        options.forEach((option, index) => {
            option.style.visibility = "visible"
        })
    }
    const clearData = () =>{
        setAttempts(0)
        setCoinsSpent(0)
        setAnsweredRight(0)
        setAnsweredWrong(0)
        setQuestionNumber(0)
        setFiftyUsed(0)
        setHintsUsed(0)
        setPoints(0)
    }

    const endGamePlay = () => {
        // const userId = auth.currentUser.uid
        // db.collection("users").doc(userId).update({
        //     totalPoints: firebase.firestore.FieldValue.increment(points),
        //     leaguePosition: null,
        //     attempts: firebase.firestore.FieldValue.increment(attempts),
        //     rightAnswers: firebase.firestore.FieldValue.increment(answeredRight),
        //     wrongAnswers: firebase.firestore.FieldValue.increment(answeredWrong),
        //     successPercentage: firebase.firestore.FieldValue.increment(points),
        //     fiftyUsed: firebase.firestore.FieldValue.increment(fiftyUsed),
        //     hintsUsed: firebase.firestore.FieldValue.increment(hintsUsed),
        //     coinsSpent: firebase.firestore.FieldValue.increment(coinsSpent),
        //     coins: firebase.firestore.FieldValue.increment(-coinsSpent),

        // })
        // .then(() => {
            props.history.push("/game/stats")
       // })
    }

    return (
        <GameContext.Provider value={{
            removedIndex, setRemovedIndex, rightAnswer, questionNumber, setQuestionNumber, showOptions,
            setRightAnswer, usedFiftyFifty, setUsedFiftyFifty, answeredWrong, setAnsweredWrong, usedHint,
            coins, setCoins, wrongAnswer, setWrongAnswer, answeredRight, setAnsweredRight, setUsedHint,
            fiftyUsed, setFiftyUsed, hintsUsed, setHintsUsed, points, setPoints, coinsSpent, setCoinsSpent,
            attempts, setAttempts, endGamePlay, clearData
        }}>
            {props.children}
        </GameContext.Provider>
    )

}


export default withRouter(GameContextProvider)