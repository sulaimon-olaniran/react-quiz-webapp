import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/Firebase'

export const QuestionContext = createContext()

const QuestionContextProvider = (props) => {
    const [questions, setQuestions] = useState(null)
    const [questionNum, setQuestionNum] = useState(0)

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
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getGameQuestions()
    }, [])

    //Reverse all options visibility back to visible incase of any hints being usded
    const showOptions = () => {
        const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
        options.forEach((option, index) => {
            option.style.visibility = "visible"
        })
    }

    const handleNextQuestion = () => {
        if (questionNum < questions && questions.length) {
            setQuestionNum(prev => prev + 1)
        }
        // console.log("clicked")
        showOptions()
    }
    const currentQuestions = questions !== null ? questions[questionNum].questions : null
    const currentOptions = questions !== null? questions[questionNum].options : null
    const currentAnswers = questions !== null  ? questions[questionNum].answers : null


    return (
        <QuestionContext.Provider value={{ 
            currentAnswers, currentOptions, currentQuestions,
            handleNextQuestion, questionNum
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}



export default QuestionContextProvider