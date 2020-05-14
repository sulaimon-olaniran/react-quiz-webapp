import React, { useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'

const BackDrop = () => {
    const { closeMenu, darkTheme } = useContext(AppContext)

    const dropClass = darkTheme ? "back-drop dropDark" : "back-drop dropLight"

    return <div className={dropClass} onClick={closeMenu}  />
    
}

export default BackDrop