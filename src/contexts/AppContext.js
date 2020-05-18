import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme ] = useState(false)
    const [menuLink, setMenuLink] = useState(false)
    const [ emailModal, setEmailModal] = useState(false)

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


    // Toggle Email Modals
    const openEmailModal = () => {
        setEmailModal(true)
    }
    const closeEmailModal = () => {
        setEmailModal(false)
    }



    return (
        <AppContext.Provider value={{
            toggleTheme:toggleTheme, darkTheme, themeClass, blueThemeClass,  
            closeMenu:closeMenu, toggleMenu:toggleMenu, menuLink, emailModal,
            openEmailModal:openEmailModal, closeEmailModal:closeEmailModal
        }}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContextProvider