import React from 'react'

const Question = ({ question }) =>{
   // console.log(question)
    
     return(
         <div className="question-container" >
          <h3>{question}</h3>
         </div>
     )
}

export default Question