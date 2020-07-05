import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import ScrollAnimation from 'react-animate-on-scroll'


const EachProfile = ({ details }) => {
    return (
        <ScrollAnimation animateIn='bounceInUp' className="each-user-container" duration={1.3} >
            <Link to={`/user/${details.id}`} >
                <div className="user-image-container" >
                    <Avatar src={details.displayImage} alt="DP" />
                </div>
                <p>{details.userName}</p>
            </Link>
        </ScrollAnimation>
    )
}

export default EachProfile