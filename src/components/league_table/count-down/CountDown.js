import React, { Fragment, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { GameContext } from '../../../contexts/GameContext'

const LeagueCountDown = (props) => {
    const [daysLeft, setDaysLeft] = useState(0)
    const [hoursLeft, setHoursLeft] = useState(0)
    const [minutesLeft, setMinutesLeft] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [isExpired, setIsExpired] = useState(false)

    const { countDownDate } = useContext(GameContext)

    const { targetDate, targetTime } = props
    const timeRef = useRef(0)
     
    const createDate = useCallback(() => {
        
        // Get todays date and time
        const now = new Date().getTime()
       
        // Set the date we're counting down to

       const timeDifference = countDownDate - now
 
        // target date and time is less than current date and time
        if (timeDifference < 0) {
            clearInterval(timeRef.current);
            setIsExpired(true)

            setTimeout(() =>{
                
            }, 5000)

        } else {
            setDaysLeft(Math.floor(timeDifference / (1000 * 60 * 60 * 24)))
            setHoursLeft(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutesLeft(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)))
            setSecondsLeft(Math.floor((timeDifference % (1000 * 60)) / 1000))
            setIsExpired(false)

        }

    }, [countDownDate ])

    const handleCounter = useCallback( () => {
        timeRef.current = setInterval(() => {
            createDate();
        }, 1000);
    }, [createDate])

    useEffect(() =>{
            createDate()
            handleCounter()

            return () => {
                clearInterval(timeRef.current)
            }
    }, [createDate, handleCounter, ])

    return (
        <Fragment>
            {!isExpired && targetDate && targetTime ? 
                <div className="counter">
                        <div className="entry">
                            <div key={daysLeft} className="entry-value">
                                <span className="count top curr flipTop">{daysLeft + 1}</span>
                                <span className="count top next">{daysLeft}</span>
                                <span className="count bottom next flipBottom">{daysLeft}</span>
                                <span className="count bottom curr">{daysLeft + 1}</span>
                            </div>
                            <div className="entry-title">Days</div>
                        </div>

                        <div className="entry">
                            <div  key={hoursLeft} className="entry-value">
                                <span className="count top curr flipTop">{hoursLeft + 1}</span>
                                <span className="count top next">{hoursLeft}</span>
                                <span className="count bottom next flipBottom">{hoursLeft}</span>
                                <span className="count bottom curr">{hoursLeft + 1}</span>
                            </div>
                            <div className="entry-title">Hours</div>
                        </div>

                        <div className="entry">
                            <div key={minutesLeft}  className="entry-value">
                                <span className="count top curr flipTop">{minutesLeft + 1}</span>
                                <span className="count top next">{minutesLeft}</span>
                                <span className="count bottom next flipBottom">{minutesLeft}</span>
                                <span className="count bottom curr">{minutesLeft + 1}</span>
                            </div>
                            <div className="entry-title">Minutes</div>
                        </div>

                        <div className="entry">
                            <div key={secondsLeft} className="entry-value">
                                <span className="count top curr flipTop">{secondsLeft + 1}</span>
                                <span className="count top next">{secondsLeft}</span>
                                <span className="count bottom next flipBottom">{secondsLeft}</span>
                                <span className="count bottom curr">{secondsLeft + 1}</span>
                            </div>
                            <div className="entry-title">Seconds</div>
                        </div>
                  
                </div>
             : 
                    <p className="alert-danger">Expired</p>
                }
        </Fragment>
    )

}

export default LeagueCountDown