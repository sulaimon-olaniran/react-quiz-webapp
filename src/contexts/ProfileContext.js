import React, { createContext, useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase/Firebase'

export const ProfileContext = createContext()

const ProfileContextProvider = ({ children }) => {
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(true)
    const mountedRef = useRef(true)

    const getUserProfile = () => {
        const userId = auth.currentUser && auth.currentUser.uid
        db.collection("users").doc(userId).onSnapshot(snapshot => {
            if (!mountedRef.current) return null
            setProfile(snapshot.data())
            setLoading(false)

            setTimeout(() => {
                setFetching(false)
            }, 1000)
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!mountedRef.current) return null
            if (user) {
                getUserProfile()
            } else {
                setFetching(false)     
            }
        })

        return () => {
            mountedRef.current = false
        }

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