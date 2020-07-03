import React, { useEffect, useState, useContext, useRef } from 'react'
import { db, auth } from '../../firebase/Firebase'
import { Redirect } from 'react-router-dom'
import EachProfile from './each_profile/EachProfile'
import { AppContext } from '../../contexts/AppContext'
import TextField from '@material-ui/core/TextField'
import Loader from '../loader/Loader'


const UsersPage = () => {
    const [usersData, setUsersData] = useState()
    const [searchField, setSearchField] = useState("")
    const { themeClass } = useContext(AppContext)
    const [fetching, setFetching] = useState(true)
    const [loading, setLoading] = useState(true)
    const mountedRef = useRef(true)

    const getUsersData = () => {
        db.collection("users").onSnapshot(docs => {
            if (!mountedRef.current) return null
            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            const sortedArray = users && users.sort(function(a, b){return a.firstName - b.firstName})
            setUsersData(sortedArray)
            // console.log(users)
            setFetching(false)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })
    }

    useEffect(() => {
        getUsersData()
        
        return () => {
            mountedRef.current = false
        }
    }, [])


    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    const handleSearchData = (data) => {
        return (
            data.userName.toLowerCase().includes(searchField.toLowerCase()) ||
            data.userName.toLowerCase() === searchField.toLowerCase()
        )
    }

    const SearchResults = usersData && usersData.filter(handleSearchData)

    const usersDataList = searchField === "" ? usersData : SearchResults

    const message = "Fetching Users"

    if (auth.currentUser === null) return <Redirect to="/signin" />

    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <div className={`users-container ${themeClass}`} >
                <div className="search-container" >
                    <TextField id="standard-basic" label="Search" onChange={handleChange} color="secondary" />
                </div>
                <div className="users-results-container" >
                    {
                        usersData && usersDataList.map((user, i) => {
                            return (
                                <EachProfile details={user} key={user.id} />

                            )
                        })
                    }
                </div>

            </div>
        )
    }
}


export default UsersPage