import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'
import GradeIcon from '@material-ui/icons/Grade'

const EachRank = ({ details, position }) => {

    //console.log(position + 3)

    return (
        <ScrollAnimation animateIn='bounceInUp' className="each-rank-container" duration={1.3} >
        <Link to={`/user/${details.id}`} >
                <h1>{position + 4}th</h1>
                <p>{details && details.userName}</p>
                <p>{details.leaguePoints}<GradeIcon  fontSize="small" /></p>
                <Avatar alt={details.userName} src={details.displayImage} />
        </Link>
        </ScrollAnimation>
    )
}

export default EachRank