import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import About from './about/About'
import Contact from './contact/Contact'
import FooterLinks from './links/FooterLinks'
import CopyrightIcon from '@material-ui/icons/Copyright';
import ScrollAnimation from 'react-animate-on-scroll'


const Footer = () => {
    const { blueThemeClass } = useContext(AppContext)
    return (
        <ScrollAnimation
            animateIn='bounceInRight'
            animateOut='bounceOutleft'
            offset={150}
        >
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
        </ScrollAnimation>
    )
}
export default Footer