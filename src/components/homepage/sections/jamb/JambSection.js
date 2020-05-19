import React from 'react'
import Button from '@material-ui/core/Button'
import jamb from './assets/jamb.png'
import ScrollAnimation from 'react-animate-on-scroll'

const JambSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
            animateIn='bounceInLeft'
            animateOut='bounceOutLeft'
            offset={150}
        >

            <div className="jamb-section">
                <h1>JAMB PAST QUESTIONS</h1>
                <div className="jamb-image">
                    <img src={jamb} alt="JAMB" />
                </div>
                <p>Are you a Nigerian preparing for JAMB?</p>
                <Button color="inherit" size="large" variant="outlined">Take Quiz</Button>
            </div>
        </ScrollAnimation>
    </div>

)

export default JambSection