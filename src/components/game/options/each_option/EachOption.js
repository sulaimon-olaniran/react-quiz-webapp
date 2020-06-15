import React, { useContext, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { GameContext } from '../../../../contexts/GameContext'
import right_answer from './assets/right_answer.wav'
import wrong_answer from './assets/wrong_answer.wav'
//import { QuestionContext } from '../../../../contexts/QuestionsContext'

const EachOption = ({ option, answer, nextQuestion, history }) => {
    const {
        setRemovedIndex, setUsedFiftyFifty, setAttempts,
        setRightAnswer, setWrongAnswer, setPoints,
        setAnsweredRight, setAnsweredWrong, questionNumber,
        setUsedHint, setQuestionNumber, showOptions
    } = useContext(GameContext)

    // const { handleNextQuestion,  } = useContext(QuestionContext)

    const wrongAnswer = useRef()
    const rightAnswer = useRef()

    const handleOption = (event) => {
        const optionValue = event.target.innerHTML.toLowerCase()
        const correctAnswer = answer.toLowerCase()
        setRemovedIndex([])
        setUsedFiftyFifty(false)
        setUsedHint(false)
        if (questionNumber <= 2) {
            setTimeout(() => {
                showOptions()
                setQuestionNumber(prev => prev + 1)

            }, 800)
        } else {
            console.log("Game Ended")
            setTimeout(() => {
                history.push("/game/stats")
            }, 1000)
        }

        if (optionValue === correctAnswer) {
            setRightAnswer(true)
            setAnsweredRight(prev => prev + 1)
            setPoints(prev => prev + (1 * 5))
            setAttempts(prev => prev + 1)
            rightAnswer.current.play()
        }
        else {
            setWrongAnswer(true)
            setAnsweredWrong(prev => prev + 1)
            wrongAnswer.current.play()
            setAttempts(prev => prev + 1)
        }

    }
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

export default withRouter(EachOption)