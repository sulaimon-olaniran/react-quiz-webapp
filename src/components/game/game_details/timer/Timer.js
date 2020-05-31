import React, { useState, useEffect, useRef, useContext } from 'react'
import { GameContext } from '../../../../contexts/GameContext'
import {  withRouter } from 'react-router-dom'


const Timer = ({history }) => {
    const [dashArray, setDashArray] = useState(null)
    //const [timeLeft, setTimeLeft] = useState(gameTime)
    const { timer, setTimer, endGamePlay } = useContext(GameContext)
   
    

    const gameTime = 120
    const warningTime = 10
    const dangerTime = 5

    const dashRef = useRef(timer)
    const fraction = timer / gameTime 

    const finalFraction = fraction - (1 / gameTime) * (1 - fraction)

    dashRef.current = (finalFraction * 283).toFixed(0)

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);

        let seconds = time % 60
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`;
    }
     
     const colorWheel = timer <= dangerTime ? "red" : timer <= warningTime ? "orange" : "green"
    
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTimer(prev => prev - 1)
            setDashArray(dashRef.current)
            
        }, 1000);
        if ( timer === 0){
            endGamePlay()
            clearInterval(timeInterval)
            history.push("/game/stats")

        }
        return () => clearInterval(timeInterval);
    }, [timer, setTimer, endGamePlay, history ]);

   
    

    return (
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                    <path
                        id="base-timer-path-remaining"
                        strokeDasharray={`${dashArray} 283`}
                        
                        className={`base-timer__path-remaining ${colorWheel}`}
                        d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "
                    >

                    </path>
                </g>
            </svg>
            <span id="base-timer-label" className="base-timer__label">
                {formatTime(timer)}
            </span>
        </div>
    )
}

export default withRouter(Timer)