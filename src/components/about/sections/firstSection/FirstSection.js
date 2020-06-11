import React from 'react'
//import Button from '@material-ui/core/Button'
//import post_utme from './assets/post_utme.jpeg'
//import cash_reward from './assets/cash_reward.png'
import ScrollAnimation from 'react-animate-on-scroll'
import summary from "./assets/summary.png"

const FirstSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
             animateIn='bounceInLeft'
             animateOut='bounceOutLeft'
            offset={150}
        >

            <div className="about-section-container">
                <h1>What is OS-Quiz</h1>
                <div className="first-section-image">
                    <img src={summary} alt="JAMB" />
                </div>
                <p>
                    OS-Quiz was built to help people
                    have fun, learn and earn something
                    in the process of answering quiz questions.
                </p>
                
            </div>
        </ScrollAnimation>
    </div >

)

export default FirstSection