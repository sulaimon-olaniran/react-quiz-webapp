import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress' 
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'


const Loader = ({ loading, message, error }) => {
    const outcome = !error ? <CheckCircleIcon color="secondary" /> : <div className="auth-error" ><ErrorOutlineIcon  /><p>Not Logged IN</p></div>
    return (
        <div className="loader-container" >
         <h1>{message}</h1>
         { loading ? <CircularProgress color="secondary" /> : outcome }
        </div>
    )
}


export default Loader