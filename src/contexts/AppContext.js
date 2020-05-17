import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme ] = useState(false)
    const [menuLink, setMenuLink] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(prev => !prev)
    }

    const themeClass = darkTheme ? "darkTheme" : "lightTheme"
    const blueThemeClass = darkTheme ? "darkBlueTheme" : "lightBlueTheme"

    const closeMenu = () => {
        setMenuLink(false)
    }

    const toggleMenu = () =>{
        setMenuLink(prev => !prev)
    }


    return (
        <AppContext.Provider value={{
            toggleTheme:toggleTheme, darkTheme, themeClass, blueThemeClass,  
            closeMenu:closeMenu, toggleMenu:toggleMenu, menuLink
        }}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContextProvider