import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress' 
import CheckCircleIcon from '@material-ui/icons/CheckCircle'


const Loader = ({ loading, message }) => {
   // const authProgress = loading ? <CircularProgress /> : <CheckIcon />
    return (
        <div className="loader-container" >
         <h1>{message}</h1>
         { loading ? <CircularProgress color="secondary" /> : <CheckCircleIcon color="secondary" /> }
        </div>
    )
}


export default Loader