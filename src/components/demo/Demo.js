import React, { useState, useEffect } from 'react'
import { shuffledQuestions } from './DemoQuestions'
import GameQuestions from '../game/GameQuestions'


const Demo = () => {
    const [questionNumber, setQuestionNumber] = useState(0)

    const currentQuestions = shuffledQuestions[questionNumber].questions 
    const currentOptions =  shuffledQuestions[questionNumber].options 
    const currentAnswers = shuffledQuestions[questionNumber].answers 
    const totalQuestion =  shuffledQuestions.length 
    const redirectTo = "/"

    return (
        <GameQuestions
            coins={200}
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