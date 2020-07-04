import React, { useContext, useEffect, useRef, useCallback } from 'react'
//import green_mark from './assets/green_mark.png'
import done_mark from './assets/done_mark.png'
import PieChart from './piechart/PieChart'
import { AppContext } from '../../../../contexts/AppContext'
import Button from '@material-ui/core/Button'
import { GameContext } from '../../../../contexts/GameContext'
import { db, auth } from '../../../../firebase/Firebase'
import firebase from '../../../../firebase/Firebase'
import { withRouter, Redirect, NavLink } from 'react-router-dom'


const StatsDetails = ({ history }) => {
    const { themeClass } = useContext(AppContext)
    const {answeredRight, answeredWrong, fiftyUsed, hintsUsed, coinsSpent, points, attempts, clearData } = useContext(GameContext)
    const mountedRef = useRef(true)


    const updateFirebaseData = useCallback( () => {
        const userId = auth.currentUser.uid
        db.collection("users").doc(userId).update({
            totalPoints: firebase.firestore.FieldValue.increment(points),
            leaguePoints : firebase.firestore.FieldValue.increment(points),
            attempts: firebase.firestore.FieldValue.increment(attempts),
            rightAnswers: firebase.firestore.FieldValue.increment(answeredRight),
            wrongAnswers: firebase.firestore.FieldValue.increment(answeredWrong),
            successPercentage: firebase.firestore.FieldValue.increment(points),
            fiftyUsed: firebase.firestore.FieldValue.increment(fiftyUsed),
            hintsUsed: firebase.firestore.FieldValue.increment(hintsUsed),
            coinsSpent: firebase.firestore.FieldValue.increment(coinsSpent),
            coins: firebase.firestore.FieldValue.increment(-coinsSpent),

        })
        .then(() => {
            history.push("/game/stats")
        })
     }, [answeredRight, answeredWrong, attempts, coinsSpent, fiftyUsed, hintsUsed, history, points])

    useEffect(() => {
        updateFirebaseData()

        return () => {
            clearData()
            mountedRef.current = false
        }
    }, [clearData, updateFirebaseData])
    
    const percentage = (answeredRight / 4) * 100
    let message;
    let color;

    if (percentage <= 30) {
        message = "You Need to try harder"
        color = "red"
    }
    else if (percentage > 30 && percentage < 70) {
        message = "Great Work but work harder"
        color = "orange"
    }
    else if (percentage >= 70) {
        message = "Great Job Done"
        color = "green"
    }
    //if( attempts === 0) return <Redirect to="/league/rules" />
    if( auth.currentUser === null) return <Redirect to="/signup" /> 
    
    return (
        <div className={`stats-details-container ${themeClass}`} >

            <div className="mark-img-container">
                <div className="img-container">
                    <img src={done_mark} alt="End Of Quiz" />

                </div>
                <h3>Quiz Has Ended</h3>
            </div>

            <PieChart />

            <div className="details-outline-container" >
                <div className="score-container">
                    <h3 style={{ color: color }}>Player's Score - {percentage}%</h3>
                </div>


                <ul className="summary-container"  >

                    <li><span>Questions</span> <span>4</span></li>
                    <li><span>Correct Answers</span> <span>{answeredRight}</span></li>
                    <li><span>Wrong Answers</span> <span>{answeredWrong}</span></li>
                    <li><span>Coins Spent</span> <span>{coinsSpent}</span></li>
                    <li><span>Hints Used</span> <span>{hintsUsed}</span></li>
                    <li><span>50/50 Used</span> <span>{fiftyUsed}</span></li>
                    <li><span>Attempts</span> <span>{attempts}</span></li>
                    <li><span>Points</span> <span>{points}</span></li>
                </ul>

                <div className="remark-container">
                    <h3 style={{ color: color }} >{message}</h3>
                </div>


            </div>

            <div className="buttons-container">
                <NavLink to="/league/game"><Button color="secondary" variant="contained" >Play Again</Button></NavLink>
                <NavLink to="/"><Button color="primary" variant="contained" >Home Page</Button></NavLink>
            </div>


        </div>
    )
}


export default withRouter(StatsDetails)