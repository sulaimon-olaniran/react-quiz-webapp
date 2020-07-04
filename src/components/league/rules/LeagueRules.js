import React, { useContext } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import albert_eintein from './assets/albert_eintein.png'
import { AppContext } from '../../../contexts/AppContext'
import Button from '@material-ui/core/Button'
import { auth } from '../../../firebase/Firebase'

const LeagueRules = () => {
    const { themeClass } = useContext(AppContext)
    if (auth.currentUser === null) return <Redirect  to="/signin" />
    return(
        <div className={`league-rules-container ${themeClass}`} >
            <h1>Welocome To League of Genius</h1>

            <div className="rules-image-container" >
                <img src={albert_eintein} alt="Albert" />

            </div>
            
            <ul>
                <li>Each session consists of 25 questions</li>
                <li>You have 3 mins for each game session</li>
                <li>The game starts once you click on continue</li>
                <li>Game is interupted if network connection is lost</li>
                <li>You can play as many times as you want to accumulate points</li>
                <li>Your points are not recorded if game is not completed</li>
            </ul>

            <div className="rules-buttons-container" >
                <NavLink exact to="/"  > <Button color="secondary" variant="contained">Not Ready</Button> </NavLink>
                <NavLink exact to="/league/game"  > <Button color="primary" variant="contained" >Continue</Button> </NavLink>
            </div>

        </div>
    )
}


export default LeagueRules