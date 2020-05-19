import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from '@material-ui/core/Button'


const SocialMedia = () => (
    <div className="social-media-container" >
        <Button
            color="secondary"
            onClick={() => window.location.href = "https://wa.me/2348088614722"}
            variant="outlined"
        >
            <WhatsAppIcon color="inherit" size="large" />
        </Button>

        <Button
            color="secondary"
            onClick={() => window.location.href = "http://m.me/oladipupo.niran"}
            variant="outlined"
        >
            <FacebookIcon color="inherit" size="large" />
        </Button>

        <Button color="secondary" href="#" variant="outlined" ><TwitterIcon color="inherit" size="large" /></Button>
    </div>
)

export default SocialMedia