import React, { useState, useEffect, useRef } from 'react'


const Timer = () => {
    const gameTime = 300
    const warningTime = 10
    const dangerTime = 5

    const [dashArray, setDashArray] = useState(null)
    const [timeLeft, setTimeLeft] = useState(gameTime)

    const dashRef = useRef(timeLeft)
    const fraction = timeLeft / gameTime //* 283).toFixed(0) 

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
     
     const colorWheel = timeLeft <= dangerTime ? "red" : timeLeft <= warningTime ? "orange" : "green"
    


    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
            setDashArray(dashRef.current)
            
        }, 1000);
        timeLeft === 0 && clearInterval(timeInterval)
        return () => clearInterval(timeInterval);
    }, [timeLeft]);

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
                {formatTime(timeLeft)}
            </span>
        </div>
    )
}

export default Timer