import React from 'react'
import brain from './assets/brain.png'
//import Button from '@material-ui/core/Button'
import ScrollAnimation from 'react-animate-on-scroll'


const SecondSection = () => (

  <div className="each-section-container">

    <ScrollAnimation
      animateIn='bounceInRight'
      animateOut='bounceOutRight'
      offset={150}
    >
      <div className="league-section">
        <h1>Become the best</h1>
        <div className="league-image">
          <img src={brain} alt="Idea" />
        </div>
        <p>
          Get up the ranks and put your
          name on the top three(3) best
          OS Quiz genius players..
        </p>
        
      </div>
    </ScrollAnimation>
  </div>
)

export default SecondSection