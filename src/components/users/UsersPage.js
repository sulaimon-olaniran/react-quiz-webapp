import React, { useEffect, useState, useContext } from 'react'
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
    const [fetching, setFetching ] = useState(true)
    const [loading, setLoading ] = useState(true)

    const getUsersData = () => {
        db.collection("users").onSnapshot(docs => {

            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })
            setUsersData(users)
           // console.log(users)
           setFetching(false)
           setTimeout(() => {
               setLoading(false)
           }, 1000);
        })
    }

    useEffect(() => {
        getUsersData()
    }, [])


    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    const handleSearchData = (data) => {
        return (
            data.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
            data.lastName.includes(searchField) ||
            data.firstName === searchField ||
            data.name.toLowerCase().includes(searchField.toLowerCase) ||
            data.name.toLowerCase() === searchField.toLowerCase()
        )
    }

    const SearchResults = usersData && usersData.filter(handleSearchData)

    const usersDataList = searchField === "" ? usersData : SearchResults
    
    const message = "Fetching Users"
    
    if (auth.currentUser === null) return <Redirect  to="/signin" />

    if ( fetching ) return <Loader message={message} loading={loading} />
    else{
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