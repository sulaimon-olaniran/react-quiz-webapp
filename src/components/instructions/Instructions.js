import React, { useContext } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { AppContext } from '../../contexts/AppContext'
import Button from '@material-ui/core/Button'
import question_image from './assets/question_image.png'
import right_image from './assets/right_image.png'
import wrong_image from './assets/wrong_image.png'
import coins_image from './assets/coins_image.png'
import fifty_image from './assets/fifty_image.png'
import hints_image from './assets/hints_image.png'


const Instructions = () => {
    const { themeClass } = useContext(AppContext)
    return (
        <div className={`instructions-container ${themeClass}`} >
            <div className="page-title" >
                <h3>How The Game Works</h3>
                <h4>Please read and understand from top to bottom</h4>

            </div>

            <div className="instructions-info-container">

                <ul className="question-info-container">
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                        offset={150}
                    >
                        <li>- Each game has a duration of (3) three minutes.</li>
                        <li>- Game ends once the time is up</li>
                        <li>- Each Game consists of (30) thirty Questions.</li>
                        <li>- Every Question consists of four(4) options.</li>
                        <li>- Options contain 1 right answer and 3 wrong ones</li>
                        <li>- Select your option of choice by clicking on it.</li>
                    </ScrollAnimation>
                </ul>

                <div className="question-image-container" >
                    <ScrollAnimation
                        animateIn='bounceInRight'
                        animateOut='bounceOutRight'
                        offset={150}
                    >
                        <img src={question_image} alt="Game" />
                    </ScrollAnimation>
                </div>

                <ul className="alert-info-container">
                    <ScrollAnimation
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                        offset={150}
                    >
                        <li>- You're alerted if you wrong or right.</li>
                        <div className="alert-details">
                            <h3>Right alert</h3>
                            <div>
                                <img src={right_image} alt="right" />
                            </div>

                            <h3>Wrong alert</h3>
                            <div>
                                <img src={wrong_image} alt="wrong" />
                            </div>

                        </div>
                    </ScrollAnimation>
                </ul>

                <ul className="coins-info-container" >
                    <ScrollAnimation
                        animateIn='bounceInRight'
                        animateOut='bounceOutRight'
                        offset={150}
                    >
                        <li>- Coins gives you access to lifelines</li>
                        <li>- You can't use lifelines with zero coins</li>
                        <img src={coins_image} alt="coins" />

                    </ScrollAnimation>
                </ul>

                <div className="lifelines-info-container" >
                    <ul>
                        <ScrollAnimation
                            animateIn='bounceInLeft'
                            animateOut='bounceOutLeft'
                            offset={150}
                        >
                            <li>- 50-50 takes away two wrong options</li>
                            <li>- 50-50 can be used once per question</li>
                            <img src={fifty_image} alt="50-50" />
                        </ScrollAnimation>
                    </ul>

                    <ul>
                        <ScrollAnimation
                            animateIn='bounceInRight'
                            animateOut='bounceOutRight'
                            offset={150}
                        >
                            <li>- Hints takes away one wrong option</li>
                            <li>- Hints can be used 3 times per question</li>
                            <img src={hints_image} alt="hints" />
                        </ScrollAnimation>
                    </ul>

                </div>
                <div className="instructions-buttons-container">
                        <Button color="secondary" variant="contained" >Game Demo</Button>
                        <Button color="primary" variant="contained" >Game League</Button>
                </div>




            </div>

        </div>
    )
}

export default Instructions