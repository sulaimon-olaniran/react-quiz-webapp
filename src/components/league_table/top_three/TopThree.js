import React from 'react'
import gold from './assets/gold.png'
import silver from './assets/silver.png'
import bronze from './assets/bronze.png'
import Avatar from '@material-ui/core/Avatar'


const TopThree = ({ firstThree }) => {
    //console.log(firstThree)
    const first = firstThree && firstThree[0]
    const second = firstThree && firstThree[1]
    const third = firstThree && firstThree[2]


    const firstImage = first !== undefined && first.displayImage
    const secondImage = second !== undefined  && second.displayImage
    const thirdImage = third !== undefined && third.displayImage
  

    return (
        <div className="top-three-container" >

            <div>
                <div className="top-three-image">
                    <Avatar src={secondImage} alt="Second Position" />
                </div>

                <div className="top-three-details" >
                    <p>{second && second.name}</p>
                    <p>{second && second.totalPoints}</p>
                </div>


                <div className="medal-image">
                    <img src={silver} alt="Gold" />
                </div>
            </div>

            <div className="first-position">
                <div className="top-three-image">
                    <Avatar src={firstImage} alt="First Position" />
                </div>
                <div className="top-three-details" >
                    <p>{first && first.name}</p>
                    <p>{first && first.totalPoints}</p>
                </div>

                <div className="medal-image">
                    <img src={gold} alt="Gold" />
                </div>
            </div>

            <div>
                <div className="top-three-image">
                    <Avatar src={thirdImage} alt="Third Position" />
                </div>
                <div className="top-three-details" >
                    <p>{third && third.name}</p>
                    <p>{third && third.totalPoints}</p>
                </div>

                <div className="medal-image">
                    <img src={bronze} alt="Bronze" />
                </div>
            </div>

        </div>
    )
}


export default TopThree