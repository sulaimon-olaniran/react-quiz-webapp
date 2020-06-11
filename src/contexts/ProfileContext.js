import React, { createContext, useState, useEffect } from 'react'
import { db, auth } from '../firebase/Firebase'

export const ProfileContext = createContext()

const ProfileContextProvider = ({children}) => {
    const [ profile, setProfile ] = useState(null)

    const getUserProfile = () => {
       const userId = auth.currentUser && auth.currentUser.uid
       db.collection("users").doc(userId) //doc('UllR35jwqcXz4FDLuH9Z9hfOnOD3')
       .get()
            .then(snapshot => {
                /*const profile = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    profile.push(data)
                })
                console.log(profile)
                setProfile(profile)*/
                console.log(snapshot.data())
                setProfile(snapshot.data())
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
         profile, getUserProfile
        }}>
            {children}
        </ProfileContext.Provider>
    )
}



export default ProfileContextProvider