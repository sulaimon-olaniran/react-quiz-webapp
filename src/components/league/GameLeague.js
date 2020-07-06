import React, { useContext, useEffect, useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { QuestionContext } from '../../contexts/QuestionsContext'
import GameQuestions from '../game/GameQuestions'
import Loader from '../loader/Loader'
import { GameContext } from '../../contexts/GameContext'
import { auth } from '../../firebase/Firebase'
import { ProfileContext } from '../../contexts/ProfileContext'


const GameLeague = () => {
    const { fetching, loading, shuffledQuestions } = useContext(QuestionContext)
    const { profile } = useContext(ProfileContext)
    const { countDownDate, setCoins } = useContext(GameContext)
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const [questionNumber, setQuestionNumber] = useState(0)
    const timingRef = useRef(0)

    

    useEffect(() => {
        timingRef.current = setInterval(() =>{
            setCurrentTime(new Date().getTime())
        }, [])

        setCoins(profile && profile.coins)
        
        return () => {
            clearInterval(timingRef.current)
        }
    }, [profile, setCoins])

    const currentQuestions = shuffledQuestions.length > 0 ? shuffledQuestions[questionNumber].questions :null
    const currentOptions = shuffledQuestions.length > 0 ? shuffledQuestions[questionNumber].options :null
    const currentAnswers = shuffledQuestions.length > 0 ? shuffledQuestions[questionNumber].answers :null
    const totalQuestion = shuffledQuestions.length > 0 ? shuffledQuestions.length : null
    const redirectTo = "/game/stats"

    const message = "Fetching Questions"

    const deadline = currentTime > countDownDate ? true : false


    if (deadline) return <Redirect to="/league/ranking" />

    if (auth.currentUser === null) return <Redirect to="/signin" />

    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <React.Fragment>

                <GameQuestions
                    currentOptions={currentOptions}
                    currentAnswers={currentAnswers}
                    currentQuestions={currentQuestions}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    totalQuestion={totalQuestion}
                    redirectTo={redirectTo}
                />
            </React.Fragment>
        )
    }
}

export default GameLeague