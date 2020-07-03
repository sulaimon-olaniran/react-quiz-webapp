import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'


const EachProfile = ({ details }) => {
    return (
            <div className="each-user-container" >
                <Link to={`/user/${details.id}`} >
                <div className="user-image-container" >
                    <Avatar src={ details.displayImage} alt="DP" />
                </div>
                <p>{details.userName}</p>
                </Link>
            </div>
     
    )
}

export default EachProfile