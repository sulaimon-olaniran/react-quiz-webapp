import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const EachRank = ({ details, position }) =>{

    //console.log(position + 3)
    
    return(
        <div className="each-rank-container" >
           <h1>{position + 4}th</h1>
           <p>{details && details.name}</p>
           <p>{details.totalPoints}</p>
           <Avatar alt={details.name} src={details.displayImage}  />
        </div>
    )
}

export default EachRank