import React from 'react'
import { Link } from 'react-router-dom'
import user_avatar from '../../profile/sections/picture/assets/user_avatar.png'


const EachProfile = ({ details }) => {
    const image = details.displayImage === "" ? user_avatar : details.displayImage
    return (
        <Link to={`/user/${details.id}`} >
            <div className="each-user-container" >
                <div className="user-image-container" >
                    <img src={image} alt="User" />
                </div>
                <p>{details.firstName} {details.lastName}</p>
            </div>
        </Link>
    )
}

export default EachProfile