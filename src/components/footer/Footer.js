import React, {useContext} from 'react'
import { AppContext } from '../../contexts/AppContext'
import About from './about/About'


const Footer = () => {
    const { blueThemeClass } = useContext(AppContext)
    return(
        <footer className={`w3-container ${blueThemeClass}`}>
             <About />
        </footer>
    )
}
export default Footer