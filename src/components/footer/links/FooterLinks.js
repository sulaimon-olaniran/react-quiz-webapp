import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const FooterLinks = () => (
    <div className="footer-links-container" >

        <NavLink to="/league/rules" >
            <Button color="secondary" >league</Button>
        </NavLink>

        <NavLink to="/instructions" >
            <Button color="secondary" >instructions</Button>
        </NavLink>

        <NavLink to="/demo" >
            <Button color="secondary" >demo</Button>
        </NavLink>

        <NavLink to="/" >
            <Button color="secondary" >home</Button>
        </NavLink>
    </div>

)

export default FooterLinks