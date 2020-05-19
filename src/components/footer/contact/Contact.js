import React from 'react'
import ContactEmail from './email/ContactEmail'
import SocialMedia from './social/SocialMedia'


const Contact = () => {
    return (
        <div className="contact-container" >
            <h1>Contact Us</h1>
            <div className="contact-options-container" > 
               <ContactEmail />
               <SocialMedia />
            </div>

        </div>
    )
}

export default Contact