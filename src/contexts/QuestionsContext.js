import React, { createContext, useState, useRef, useEffect } from 'react'
import { db } from '../firebase/Firebase'

export const QuestionContext = createContext()

const QuestionContextProvider = (props) => {
    const [questions, setQuestions] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)
    const mountedRef = useRef(true)

    useEffect(() =>{
        getGameQuestions()
        return () => {
            mountedRef.current = false
        }
    }, [])

    const getGameQuestions = () => {
        if (!mountedRef.current) return null
        db.collection('questions')
            .get()
            .then(snapshot => {
                const questions = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    questions.push(data)
                })
                setQuestions(questions)
                console.log(questions.length)
                setLoading(false)

                setTimeout(() => {
                    setFetching(false)
                }, 1000)
            })
            .catch(error => console.log(error))
    }

    const shuffledQuestions = []

        while (questions !== null && shuffledQuestions.length <= 29) {
            const random = questions[Math.floor(Math.random() * questions.length)]
            if (!shuffledQuestions.includes(random)) {
                shuffledQuestions.push(random)
            }
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

    return (
        <QuestionContext.Provider value={{
            questionNumber, setQuestionNumber, loading, shuffledQuestions,
            handleNextQuestion: handleNextQuestion, questions, getGameQuestions, fetching
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}



export default QuestionContextProvider