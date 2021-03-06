import React from 'react'
//import Button from '@material-ui/core/Button'
//import jamb from './assets/jamb.png'
import trophy from './assets/trophy.png'
import ScrollAnimation from 'react-animate-on-scroll'

const ThirdSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
            animateIn='bounceInLeft'
            animateOut='bounceOutLeft'
            offset={150}
        >

            <div className="about-section-container">
                <h1>Become a Champion</h1>
                <div className="third-section-image">
                    <img src={trophy} alt="Trophies" />
                </div>
                <p>
                    Become the best, beat other genius competitors
                    to become a Champion and earn a trophy to your name
                </p>
               
            </div>
        </ScrollAnimation>
    </div>

)

export default ThirdSection