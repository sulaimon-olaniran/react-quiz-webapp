import React, { createContext, useState } from 'react'
import { db } from '../firebase/Firebase'

export const QuestionContext = createContext()

const QuestionContextProvider = (props) => {
    const [questions, setQuestions] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)

    const getGameQuestions = () => {

        db.collection('questions')
            .get()
            .then(snapshot => {
                const questions = []
                const shuffledQuestions = []

                snapshot.forEach(doc => {
                    const data = doc.data()
                    questions.push(data)
                })
                //console.log(questions)
                setQuestions(questions)
                console.log(shuffledQuestions)

                setLoading(false)

                setTimeout(() => {
                    setFetching(false)
                }, 1000)
            })
            .catch(error => console.log(error))
    }

    const shuffledQuestions = []

    //const shuffleArray = () => {
        while (questions !== null && shuffledQuestions.length <= 2) {
            const random = questions[Math.floor(Math.random() * questions.length)]
            if (!shuffledQuestions.includes(random)) {
                shuffledQuestions.push(random)
            }
        }

  //  }



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
    // const currentQuestions = questions !== null ? questions[questionNumber].questions : null
    // const currentOptions = questions !== null ? questions[questionNumber].options : null
    // const currentAnswers = questions !== null  ? questions[questionNumber].answers : null


    return (
        <QuestionContext.Provider value={{
            //currentAnswers, currentOptions, currentQuestions,
            questionNumber, setQuestionNumber, loading, shuffledQuestions,
            handleNextQuestion: handleNextQuestion, questions, getGameQuestions, fetching
        }}>
            {props.children}
        </QuestionContext.Provider>
    )
}



export default QuestionContextProvider