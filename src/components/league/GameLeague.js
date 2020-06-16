import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { QuestionContext } from '../../contexts/QuestionsContext'
import GameQuestions from '../game/GameQuestions'
import Loader from '../loader/Loader'
import { GameContext } from '../../contexts/GameContext'
import { auth } from '../../firebase/Firebase'


const GameLeague = ({ history }) => {
    const { getGameQuestions, questions, fetching, loading } = useContext(QuestionContext)
    const { questionNumber, endGamePlay } = useContext(GameContext)

    useEffect(() => {
        getGameQuestions()
    }, [])


    // let currentQuestions = undefined
    // let currentOptions = undefined
    // let currentAnswers = undefineds

    // if (questionNumber <= 2) {
    const currentQuestions = questions !== null ? questions[questionNumber].questions : null
    const currentOptions = questions !== null ? questions[questionNumber].options : null
    const currentAnswers = questions !== null ? questions[questionNumber].answers : null
    // } else {
    //     history.push("/game/stats")
    //     console.log("noticed that number is greater than 3")
    // }
    //const currentQuestions = questions !== null ? questions[questionNumber].questions : null
    // const currentOptions = questions !== null ? questions[questionNumber].options : null
    // const currentAnswers = questions !== null  ? questions[questionNumber].answers : null

    const message = "Fetching Questions"
     
    if (auth.currentUser === null) return <Redirect  to="/signin" />

    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <React.Fragment>

                <GameQuestions
                    currentOptions={currentOptions}
                    currentAnswers={currentAnswers}
                    currentQuestions={currentQuestions}
                    questionNumber={questionNumber}
                />
            </React.Fragment>
        )
    }
}

export default GameLeague