import React from 'react'
import ContactEmail from './email/ContactEmail'


const Contact = () => {
    return (
        <div className="contact-container" >
            <h1>Contact Us</h1>
            <div> 
               <ContactEmail />
            </div>

        </div>
    )
}

export default Contact