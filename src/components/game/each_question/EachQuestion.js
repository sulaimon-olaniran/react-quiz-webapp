import React from 'react'
import Question from './question/Question'
import Options from './options/Options'


const EachQuestion = ({ questions }) => {
    const { question, answers, options } = questions

    return (
        <div>
            <Question question={question} />

            <Options options={options} answers={answers} />
        </div>
    )
}


export default EachQuestion