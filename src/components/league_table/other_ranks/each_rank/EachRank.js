import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"
import GradeIcon from '@material-ui/icons/Grade'



const EachRank = ({ details, position }) => {


    return (
        <div className="each-rank-container"  >
        <Link to={`/user/${details.id}`} >
                <h1>{position + 4}th</h1>
                <p>{details && details.userName}</p>
                <p>{details.leaguePoints}<GradeIcon  fontSize="small" /></p>
                <Avatar alt={details.userName} src={details.displayImage} />
        </Link>
        </div>
    )
}

export default EachRank