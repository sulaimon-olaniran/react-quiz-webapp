import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const FooterLinks = () => (
    <div className="footer-links-container" >

        <NavLink to="/" >
            <Button color="secondary" >LEAGUE</Button>
        </NavLink>

        <NavLink to="/" >
            <Button color="secondary" >JAMB</Button>
        </NavLink>

        <NavLink to="/" >
            <Button color="secondary" >POST-JAMB</Button>
        </NavLink>

        <NavLink to="/" >
            <Button color="secondary" >FAQ</Button>
        </NavLink>
    </div>

)

export default FooterLinks