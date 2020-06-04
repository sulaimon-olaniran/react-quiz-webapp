import React from 'react'
//import Button from '@material-ui/core/Button'
//import post_utme from './assets/post_utme.jpeg'
//import cash_reward from './assets/cash_reward.png'
import ScrollAnimation from 'react-animate-on-scroll'
import olami from './assets/olami.png'
//import summary from "./assets/summary.png"

const AboutMeSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
             animateIn='bounceInRight'
             animateOut='bounceOutRight'
            offset={150}
        >

            <div className="about-me-section">
                <h1>About Me</h1>
                <div className="about-me-image">
                    <img src={olami} alt="Oladipupo" />
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

export default AboutMeSection