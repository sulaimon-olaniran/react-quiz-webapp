import React from 'react'
//import { GameContext } from '../../../contexts/GameContext'
// import { QuestionContext } from '../../../contexts/QuestionsContext'
// import { GameContext } from '../../../contexts/GameContext'

const Question = ({ currentQuestions, questionNumber }) => {
  //const {  questions, questionNumber } = useContext(QuestionContext)
  const randomQuestion = currentQuestions[Math.floor(Math.random() * currentQuestions.length)]
 

  return (
  
    <div className="question-container" >
      <h3>{questionNumber + 1} of 4</h3>
      <h3>{randomQuestion}</h3>
    </div>
  )
}

export default React.memo(Question) 