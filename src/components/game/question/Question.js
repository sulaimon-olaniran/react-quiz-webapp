import React from 'react'

const Question = ({ question, numOfQuestions, questionNum }) => {

  return (
    <div className="question-container" >
      <h3>{questionNum + 1} of {numOfQuestions}</h3>
      <h3>{question}</h3>
    </div>
  )
}

export default React.memo(Question) 