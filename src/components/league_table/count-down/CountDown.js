import React, { Fragment, Component, useState, useEffect } from 'react'

const LeagueCountDown = (props) => {
    const [daysLeft, setDaysLeft] = useState(0)
    const [hoursLeft, setHoursLeft] = useState(0)
    const [minutesLeft, setMinutesLeft] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [isExpired, setIsExpired] = useState(false)
    //const [timeDifference, setTimeDifference] = useState(0)

    const { targetDate, targetTime } = props

    let timer;
    let timeDifference; 

    const createDate = () => {
        
        // Get todays date and time
        let now = new Date().getTime()
        // Set the date we're counting down to
        let countDownDate = new Date(targetDate + " " + targetTime).getTime();

        // Find the distance between now and the count down date
       // setTimeDifference(countDownDate - now)
        // const distance = countDownDate - now;

        timeDifference = countDownDate - now
 
        // target date and time is less than current date and time
        if (timeDifference < 0) {
            clearInterval(timer);
            setIsExpired(true)

        } else {
            setDaysLeft(Math.floor(timeDifference / (1000 * 60 * 60 * 24)))
            setHoursLeft(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutesLeft(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)))
            setSecondsLeft(Math.floor((timeDifference % (1000 * 60)) / 1000))
            setIsExpired(false)

        }

    }
    const handleCounter = () => {
        timer = setInterval(() => {
            createDate();
        }, 1000);
    };

    useEffect(() =>{
            createDate()
            handleCounter()
    }, [timer])

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
                            <div className="entry-title">Hours</div>
                        </div>

                        <div className="entry">
                            <div key={secondsLeft} className="entry-value">
                                <span className="count top curr flipTop">{secondsLeft + 1}</span>
                                <span className="count top next">{secondsLeft}</span>
                                <span className="count bottom next flipBottom">{secondsLeft}</span>
                                <span className="count bottom curr">{secondsLeft + 1}</span>
                            </div>
                            <div className="entry-title">Hours</div>
                        </div>
                  
                </div>
             : 
                    <p className="alert-danger">Expired</p>
                }
        </Fragment>
    )

}

export default LeagueCountDown