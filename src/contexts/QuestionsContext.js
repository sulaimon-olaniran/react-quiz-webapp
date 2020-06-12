import React, { createContext, useState } from 'react'
import { db } from '../firebase/Firebase'

export const QuestionContext = createContext()

const QuestionContextProvider = (props) => {
    const [questions, setQuestions] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [ loading, setLoading ] = useState(true)
    const [ fetching, setFetching ] = useState(true)

    const getGameQuestions = () => {
        
        db.collection('questions')
            .get()
            .then(snapshot => {
                const questions = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    questions.push(data)
                })
                //console.log(questions)
                setQuestions(questions)
                setLoading(false)
                
                setTimeout(() =>{
                    setFetching(false)
                }, 1000)
            })
            .catch(error => console.log(error))
    }

    //Reverse all options visibility back to visible incase of any hints being usded
    const showOptions = () => {
        const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
        options.forEach((option, index) => {
            option.style.visibility = "visible"
        })
    }

    const handleNextQuestion = () => {
        showOptions()
    }
    //const currentQuestions = questions && questions[questionNumber].questions// questions !== null ? questions[questionNum].questions : null
    const currentOptions = questions !== null? questions[questionNumber].options : null
    const currentAnswers = questions !== null  ? questions[questionNumber].answers : null


    return (
        <QuestionContext.Provider value={{ 
            currentAnswers, currentOptions,  questionNumber, setQuestionNumber, loading,
            handleNextQuestion: handleNextQuestion , questions, getGameQuestions, fetching
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}



export default QuestionContextProvider