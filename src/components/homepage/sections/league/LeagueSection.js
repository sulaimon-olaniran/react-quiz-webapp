import React from 'react'
import brain from './assets/brain.jpg'
import Button from '@material-ui/core/Button'


const LeagueSection = () => (
  <div className="league-section">
    <h1>GENIUS LEAGUE</h1>
    <div className="league-image">
      <img src={brain} alt="Idea" />
    </div>
    <p>Do you have what it takes to top the league?</p>
    <div>
      <Button color="inherit" size="large" variant="outlined">JOIN THE LEAGUE</Button>
    </div>
  </div>

)

export default LeagueSection