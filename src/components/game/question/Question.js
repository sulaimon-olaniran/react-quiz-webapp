import React, { useContext } from 'react'
//import { GameContext } from '../../../contexts/GameContext'
import { QuestionContext } from '../../../contexts/QuestionsContext'

const Question = () => {
  const {  questions, questionNumber } = useContext(QuestionContext)
  const currentQuestions = questions && questions[questionNumber].questions

  const randomQuestion = currentQuestions[Math.floor(Math.random() * currentQuestions.length)]

  return (
  
    <div className="question-container" >
      <h3>{questionNumber + 1} of 4</h3>
      <h3>{randomQuestion}</h3>
    </div>
  )
}

export default React.memo(Question) 