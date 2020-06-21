import React from 'react'

const Question = ({ currentQuestions, questionNumber, totalQuestion}) => {
  const randomQuestion = currentQuestions[Math.floor(Math.random() * currentQuestions.length)]
 
  return (
  
    <div className="question-container" >
      <h3>{questionNumber + 1} of {totalQuestion}</h3>
      <h3>{randomQuestion}</h3>
    </div>
  )
}

export default React.memo(Question) 