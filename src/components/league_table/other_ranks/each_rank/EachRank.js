import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"

const EachRank = ({ details, position }) => {

    //console.log(position + 3)

    return (
        <Link to={`/user/${details.id}`} className="each-rank-container">
                <h1>{position + 4}th</h1>
                <p>{details && details.name}</p>
                <p>{details.leaguePoints}</p>
                <Avatar alt={details.name} src={details.displayImage} />
        </Link>
    )
}

export default EachRank