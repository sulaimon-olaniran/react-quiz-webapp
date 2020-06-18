import React from 'react'
import oladipupo from './assets/oladipupo.png'
import gold from './assets/gold.png'
import silver from './assets/silver.png'
import bronze from './assets/bronze.png'
import user_avatar from './assets/user_avatar.png'


const TopThree = ({ firstThree }) => {
    //console.log(firstThree)
    const first = firstThree && firstThree[0]
    const second = firstThree && firstThree[1]
    const third = firstThree && firstThree[2]


    const firstImage = first !== undefined ? first.displayImage === "" ? user_avatar : first.displayImage : null
    const secondImage = second !== undefined ? second.displayImage === "" ? user_avatar : second.displayImage : null
    const thirdImage = third !== undefined ? third.displayImage === "" ? user_avatar : third.displayImage : null
  

    return (
        <div className="top-three-container" >

            <div>
                <div className="top-three-image">
                    <img src={secondImage} alt="blah" />
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
                    <img src={firstImage} alt="blah" />

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
                    <img src={thirdImage} alt="blah" />
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