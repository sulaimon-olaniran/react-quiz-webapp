import React, {useContext} from 'react'
import { AppContext } from '../../contexts/AppContext'
import About from './about/About'
import Divider from '@material-ui/core/Divider'
import Contact from './contact/Contact'


const Footer = () => {
    const { blueThemeClass } = useContext(AppContext)
    return(
        <footer className={`w3-container ${blueThemeClass}`}>
             <About />
             <Divider light />
             <Contact />
        </footer>
    )
}
export default Footer