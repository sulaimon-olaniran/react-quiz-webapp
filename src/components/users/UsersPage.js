import React, { useEffect, useState, useContext } from 'react'
import { db } from '../../firebase/Firebase'
import EachProfile from './each_profile/EachProfile'
import { AppContext } from '../../contexts/AppContext'


const UsersPage = () => {
    const [usersData, setUsersData] = useState()
    const { themeClass } = useContext(AppContext)

    const getUsersData = () => {
        db.collection("users").onSnapshot(docs => {
           
            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            setUsersData(users)
            console.log(users)
        })
    }

    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <div className={`users-container ${themeClass}`} >
            {
                usersData && usersData.map((user, i) => {
                    return(
                    <EachProfile details={user} key={i} />
                    )
                })
            }

        </div>
    )
}


export default UsersPage