import React, { useContext, useRef } from 'react'
import { GameContext } from '../../../../contexts/GameContext'
import right_answer from './assets/right_answer.wav'
import wrong_answer from './assets/wrong_answer.wav'
import { QuestionContext } from '../../../../contexts/QuestionsContext'

const EachOption = ({ option, answer, nextQuestion }) => {
    const {
        setRemovedIndex, setUsedFiftyFifty,
        setRightAnswer, setWrongAnswer,
        setAnsweredRight, setAnsweredWrong,
        answeredRight, setUsedHint
    } = useContext(GameContext)

    const { handleNextQuestion , setQuestionNumber} = useContext(QuestionContext)

    const wrongAnswer = useRef()
    const rightAnswer = useRef()

    const handleOption = (event) => {
        const optionValue = event.target.innerHTML.toLowerCase()
        const correctAnswer = answer.toLowerCase()
       console.log(answeredRight)
        setRemovedIndex([])
        setUsedFiftyFifty(false)
        setUsedHint(false)

        setTimeout(() => {
            handleNextQuestion()
            setQuestionNumber(prev => prev + 1)
           
        }, 800)

        if (optionValue === correctAnswer) {
            setRightAnswer(true)
            setAnsweredRight(prev => prev + 1)
            rightAnswer.current.play()
        }
        else {
            setWrongAnswer(true)
            setAnsweredWrong(prev => prev + 1)
            wrongAnswer.current.play()
        }

    }
    //console.log("hello from each options")

    return (

        <div className="each-option-container" >
            <p onClick={handleOption}>{option}</p>
            <React.Fragment>
                <audio src={right_answer} ref={rightAnswer} ></audio>
                <audio src={wrong_answer} ref={wrongAnswer} ></audio>
            </React.Fragment>

        </div>
    )
}

export default React.memo(EachOption)