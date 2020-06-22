import React, { useState, useEffect, useContext } from 'react'
import { shuffledQuestions } from './DemoQuestions'
import GameQuestions from '../game/GameQuestions'
import { GameContext } from '../../contexts/GameContext'


const Demo = () => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const { setCoins } = useContext(GameContext)

    useEffect(() =>{
        setCoins(200)
    }, [])
    const currentQuestions = shuffledQuestions[questionNumber].questions 
    const currentOptions =  shuffledQuestions[questionNumber].options 
    const currentAnswers = shuffledQuestions[questionNumber].answers 
    const totalQuestion =  shuffledQuestions.length 
    const redirectTo = "/"

    return (
        <GameQuestions
            coins= "free"
            currentOptions={currentOptions}
            currentAnswers={currentAnswers}
            currentQuestions={currentQuestions}
            questionNumber={questionNumber}
            totalQuestion={totalQuestion}
            setQuestionNumber={setQuestionNumber}
            totalQuestion ={totalQuestion}
            redirectTo={redirectTo}
        />
    )
    
}


export default Demo