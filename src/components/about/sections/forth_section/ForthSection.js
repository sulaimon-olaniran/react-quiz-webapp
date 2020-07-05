import React from 'react'
//import cash_reward from './assets/cash_reward.png'
import reward from './assets/reward.png'
import ScrollAnimation from 'react-animate-on-scroll'

const ForthSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
             animateIn='bounceInRight'
             animateOut='bounceOutRight'
            offset={150}
        >

            <div className="about-section-container">
                <h1>Get Rewarded</h1>
                <div className="forth-section-image">
                    <img src={reward} alt="JAMB" />
                </div>
                <p>
                    Make it to the top three(3) and 
                    a cash price will be rewarded to you.
                    Make the top ten(10) and you'd receive
                    free coins to access lifelines.
                </p>
                
            </div>
        </ScrollAnimation>
    </div >

)

export default ForthSection