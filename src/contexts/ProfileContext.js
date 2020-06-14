import React, { createContext, useState, useEffect } from 'react'
import { db, auth } from '../firebase/Firebase'

export const ProfileContext = createContext()

const ProfileContextProvider = ({children}) => {
    const [ profile, setProfile ] = useState(null)
    const [ loading, setLoading ] = useState()
    const [ fetching, setFetching ] = useState()

    const getUserProfile = () => {
        setLoading(true)
        setFetching(true)
       const userId = auth.currentUser && auth.currentUser.uid
       db.collection("users").doc(userId).onSnapshot( snapshot => 
    //    .get()
    //         .then(snapshot
               {
                //console.log(snapshot.data())
                setProfile(snapshot.data())
                setLoading(false)
                
                setTimeout(() =>{
                    setFetching(false)
                }, 1000)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                getUserProfile()
            }
        })
        
    }, [])

    return (
        <ProfileContext.Provider value={{ 
         profile, getUserProfile, loading, fetching
        }}>
            {children}
        </ProfileContext.Provider>
    )
}



export default ProfileContextProvider