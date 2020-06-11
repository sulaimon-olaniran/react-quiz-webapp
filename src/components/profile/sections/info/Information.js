import React from 'react'
import gold_cup from './assets/gold_cup.png'
import silver_cup from './assets/silver_cup.png'
import bronze_cup from './assets/bronze_cup.png'


const Information = ({ details }) => {
    return (
        <div className="profile-information-container" >

            <div className="profile-name-container">
                <h3>{details.firstName} {details.lastName}</h3>
            </div>

            <div className="achievements-container" >
                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={bronze_cup} alt="Bronze" />
                    </div>
                    <h3>10</h3>

                </div>

                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={gold_cup} alt="Gold" />
                    </div>
                    <h3>3</h3>
                </div>


                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={silver_cup} alt="silver" />                       
                    </div>

                    <h3>2</h3>
                </div>

            </div>

        </div>
    )
}

export default Information