import React, {useContext} from 'react'
import { AppContext } from '../../contexts/AppContext'


const Footer = () => {
    const { blueThemeClass } = useContext(AppContext)
    return(
        <footer className={blueThemeClass}>
              <h1>Footer</h1>
        </footer>
    )
}
export default Footer