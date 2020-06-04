import React from 'react'
//import Button from '@material-ui/core/Button'
//import post_utme from './assets/post_utme.jpeg'
import cash_reward from './assets/cash_reward.png'
import ScrollAnimation from 'react-animate-on-scroll'

const ForthSection = () => (
    <div className="each-section-container">
        <ScrollAnimation
             animateIn='bounceInRight'
             animateOut='bounceOutRight'
            offset={150}
        >

            <div className="post-jamb-section">
                <h1>Win A Cash Price</h1>
                <div className="post-jamb-image">
                    <img src={cash_reward} alt="JAMB" />
                </div>
                <p>
                    Make it to the top three(3) and 
                    a cash price will be rewarded to you
                </p>
                
            </div>
        </ScrollAnimation>
    </div >

)

export default ForthSection