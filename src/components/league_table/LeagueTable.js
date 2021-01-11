import React, { useContext, useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import TopThree from './top_three/TopThree'
import { AppContext } from '../../contexts/AppContext'
import { db, auth } from '../../firebase/Firebase'
import OtherRanks from './other_ranks/OtherRanks'
import LeagueCountDown from './count-down/CountDown'


const LeagueTable = () => {
    const [usersData, setUsersData] = useState()
    const { themeClass } = useContext(AppContext)
    const mountedRef = useRef(true)

    const getUsersData = () => {
        if (!mountedRef.current) return null
        db.collection("users").onSnapshot(docs => {
            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            setUsersData(users)
        })
    }

    useEffect(() => {
        getUsersData()

        return () => {
            mountedRef.current = false
        }
    }, [])

    //Arrange user's data in descending order according to points

    const sortedArray = usersData && usersData.sort(function (a, b) { return b.leaguePoints - a.leaguePoints })

    //picking the first three
    const firstThree = usersData && sortedArray.slice(0, 3)


    if (auth.currentUser === null) return <Redirect to="/login" />
    return (
        <div className={`league-table-container ${themeClass}`} >
            <h1>League Table and Duration</h1>
            <LeagueCountDown  />
            <TopThree firstThree={firstThree} />
            <OtherRanks ranks={sortedArray} />

        </div>
    )
}

export default LeagueTable