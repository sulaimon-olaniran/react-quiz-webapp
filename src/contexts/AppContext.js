import React, { createContext, useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase/Firebase'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [ usersData, setUsersData ] = useState()
    const [darkTheme, setDarkTheme] = useState(false)
    const [menuLink, setMenuLink] = useState(false)
    const [loggedIn, setLoggedIn] = useState()
    const [isAuth, setIsAuth] = useState(true)
    const mountedRef = useRef(true)

    const getAppUsers = () => {
        db.collection("users").onSnapshot(docs => {
            if (!mountedRef.current) return null
            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            setUsersData(users)
        })
    }

    useEffect(() => {
        getAppUsers()
        authUser().then((user) => {
            if (!mountedRef.current) return null
            setIsAuth(false)

        }, (error) => {
            setIsAuth(false)
            console.log(error);
        });

        return () => {
            mountedRef.current = false
        }
    }, [])

    const authUser = () => {
        return new Promise(function (resolve, reject) {
            auth.onAuthStateChanged(user => {
                if (user) {
                    resolve(user)
                    setLoggedIn(true)
                }
                else {
                    setLoggedIn(false)
                }
                reject("not logged in")
            })
        })
    }



    const toggleTheme = () => {
        setDarkTheme(prev => !prev)
    }

    const themeClass = darkTheme ? "darkTheme" : "lightTheme"
    const blueThemeClass = darkTheme ? "darkBlueTheme" : "lightBlueTheme"

    const closeMenu = () => {
        setMenuLink(false)
    }

    const toggleMenu = () => {
        setMenuLink(prev => !prev)
    }

    return (
        <AppContext.Provider value={{
            toggleTheme: toggleTheme, darkTheme, themeClass, blueThemeClass, loggedIn,
            closeMenu: closeMenu, toggleMenu: toggleMenu, menuLink, isAuth, usersData
        }}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContextProvider