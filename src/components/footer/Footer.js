import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import About from './about/About'
import Contact from './contact/Contact'
import FooterLinks from './links/FooterLinks'
import CopyrightIcon from '@material-ui/icons/Copyright'

const Footer = () => {
    const { blueThemeClass } = useContext(AppContext)
    return (
            <footer className={`w3-container ${blueThemeClass}`}>
                <About />
                <hr />
                <Contact />
                <hr />
                <FooterLinks />
                <hr />
                <div className="copyright-container" >
                    <small><CopyrightIcon />OS Company 2020</small>
                </div>
            </footer>
    )
}
export default Footer