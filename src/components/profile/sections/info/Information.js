import React from 'react'
import gold_cup from './assets/gold_cup.png'
import silver_cup from './assets/silver_cup.png'
import bronze_cup from './assets/bronze_cup.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'


const Information = ({ details }) => {

    return (
        <div className="profile-information-container" >

            <div className="profile-name-container">
                <div><h3>{details.name && details.name}</h3></div>
                <div><h3>{details.userName && details.userName}</h3></div>

                {details.sex && <div><p>Sex - {details.sex}</p></div>}
                { details.about && <div className="about-container" ><p>{details.about}</p></div>}
                { details.country && <div><p>Country - {details.country}</p></div> }
                { details.state && <div><p>State - {details.state}</p></div> }
    
            </div>

            <div className="profile-contact-container" >
                {details.phoneNumber &&  <a href={`https:/wa.me/234${details.phoneNumber}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon color="primary" size="large" /></a>}
                {details.facebook && <a href={`https:/facebook.com/${details.facebook}`} target="_blanak" rel="noopener noreferrer" ><FacebookIcon color="primary" size="large" /></a>}
                {details.instagram && <a href={`https:/instagram.com/${details.instagram}`} target="_blanak" rel="noopener noreferrer" ><InstagramIcon color="primary" size="large" /></a>}
                {details.twitter && <a href={`https:/twitter.com/${details.twitter}`} target="_blanak" rel="noopener noreferrer" ><TwitterIcon color="primary" size="large" /></a>}
            </div>

            <div className="achievements-container" >
                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={bronze_cup} alt="Bronze" />
                    </div>
                    <h3>{details.bronze && details.bronze}</h3>

                </div>

                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={gold_cup} alt="Gold" />
                    </div>
                    <h3>{details.gold && details.gold}</h3>
                </div>


                <div className="each-medal-container" >

                    <div className="medal-image-container">
                        <img src={silver_cup} alt="silver" />
                    </div>

                    <h3>{details.silver && details.silver}</h3>
                </div>

            </div>

        </div>
    )
}

export default Information