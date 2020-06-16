import React from 'react'
import StatsDetails from './details/StatsDetails'
import { auth } from '../../../firebase/Firebase'
import { Redirect } from 'react-router-dom'

const GameStats = () => {

    if (auth.currentUser === null) return <Redirect  to="/signin" />
    return (
        <React.Fragment>
           <StatsDetails />
        </React.Fragment>
    )
}

export default GameStats