import React from 'react'
import happy_prof from './assets/happy_prof.png'
//import Button from '@material-ui/core/Button'
import ScrollAnimation from 'react-animate-on-scroll'
//import Slide from '@material-ui/core/Slide'

//style for each-section-container can be found in homepage.scss

const SecondSection = () => (
  <div className="each-section-container">
    <ScrollAnimation
      animateIn='bounceInRight'
      animateOut='bounceOutRight'
      offset={150}
    >
      <div className="about-section-container">

        <h1>Become A Genius</h1>
        <div className="second-section-image">
          <img src={happy_prof} alt="DEMO" />
        </div>

        <p>
          Join the league and compete with
          other Geniuses for a spot on the
          league table
        </p>
      </div>

    </ScrollAnimation>
  </div>


)

export default SecondSection