import React from 'react'
import gold from './assets/gold.png'
import silver from './assets/silver.png'
import bronze from './assets/bronze.png'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'


const TopThree = ({ firstThree }) => {
    //console.log(firstThree)
    const first = firstThree && firstThree[0]
    const second = firstThree && firstThree[1]
    const third = firstThree && firstThree[2]


    const firstImage = first !== undefined && first.displayImage
    const secondImage = second !== undefined && second.displayImage
    const thirdImage = third !== undefined && third.displayImage


    return (
        <div className="top-three-container" >

            <Link to={`/user/${second && second.id}`} className="each-top-container" >
                <div className="top-three-image">
                    <Avatar src={secondImage} alt="Second Position" />
                </div>

                <div className="top-three-details" >
                    <p>{second && second.name}</p>
                    <h3>{second && second.totalPoints}</h3>
                </div>


                <div className="medal-image">
                    <img src={silver} alt="Gold" />
                </div>
            </Link>


            <Link  to={`/user/${first && first.id}`} className="each-top-container first-position">
                <div className="top-three-image">
                    <Avatar src={firstImage} alt="First Position" />
                </div>
                <div className="top-three-details" >
                    <p>{first && first.name}</p>
                    <h3>{first && first.totalPoints}</h3>
                </div>

                <div className="medal-image">
                    <img src={gold} alt="Gold" />
                </div>
            </Link>

            <Link  to={`/user/${third && third.id}`} className="each-top-container" >
                <div className="top-three-image">
                    <Avatar src={thirdImage} alt="Third Position" />
                </div>
                <div className="top-three-details" >
                    <p>{third && third.name}</p>
                    <h3>{third && third.totalPoints}</h3>
                </div>

                <div className="medal-image">
                    <img src={bronze} alt="Bronze" />
                </div>
            </Link>

        </div>
    )
}


export default TopThree