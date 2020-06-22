import React, { useContext, useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { GameContext } from '../../../../contexts/GameContext'
import right_answer from './assets/right_answer.wav'
import wrong_answer from './assets/wrong_answer.wav'
//import Button from '@material-ui/core/Button'

const EachOption = ({ option, answer, questionNumber, setQuestionNumber, totalQuestion, history, redirectTo }) => {
    const [ disableOption, setDisableOption] = useState(false)
    const {
        setRemovedIndex, setUsedFiftyFifty, setAttempts,
        setRightAnswer, setWrongAnswer, setPoints, setAnsweredRight, 
        setAnsweredWrong,  setUsedHint, showOptions
    } = useContext(GameContext)

    const wrongAnswer = useRef()
    const rightAnswer = useRef()

    const handleOption = (event) => {
        setDisableOption(true)
        const optionValue = event.target.innerHTML.toLowerCase()
        const correctAnswer = answer.toLowerCase()
        setRemovedIndex([])
        setUsedFiftyFifty(false)
        setUsedHint(false)
        
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
            setAttempts(prev => prev + 1)
            wrongAnswer.current.play()
        }


        if (questionNumber <= totalQuestion - 2 ) {
            setTimeout(() => {
                showOptions()
                setDisableOption(false)
                setQuestionNumber(prev => prev + 1)

            }, 1000)
        } else {
            console.log("Game Ended")
            setTimeout(() => {
                history.push(redirectTo)
            }, 1000)
        }


    }
    return (

        <div className="each-option-container" >
            <button onClick={handleOption} disabled={disableOption} >{option}</button>
            <React.Fragment>
                <audio src={right_answer} ref={rightAnswer} ></audio>
                <audio src={wrong_answer} ref={wrongAnswer} ></audio>
            </React.Fragment>

        </div>
    )
}

export default withRouter(EachOption)