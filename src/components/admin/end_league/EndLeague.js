import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import { AppContext } from '../../../contexts/AppContext'
import { db } from '../../../firebase/Firebase'
import  firebase from '../../../firebase/Firebase'


const EndLeague = () =>{
    const { usersData } = useContext(AppContext)

    const handleAwards = () =>{
        usersData && usersData.map(user => {
                    if (user.leaguePosition === 1) {
                        return db.collection("users").doc(user.id).update({
                           gold : firebase.firestore.FieldValue.increment(1)
        
                        }).then(() =>{
                            alert("done done done")
                        })
                    
                    }
                    else if ( user.leaguePosition === 2) {
                        return db.collection("users").doc(user.id).update({
                           silver : firebase.firestore.FieldValue.increment(1)
                        })
                    }
                    else if ( user.leaguePosition === 3) {
                        return db.collection("users").doc(user.id).update({
                           bronze : firebase.firestore.FieldValue.increment(1)
                        })
                    }
                })

    }

    const clearLeaguePoints = () =>{
        usersData && usersData.map((user, i) =>{
            return db.collection("users").doc(user.id).update({
                leaguePoints : 0
            })
        })
    }


    return(
        <div className="button-container" >
            <Button variant="contained" color="secondary"onClick={handleAwards} >Give Awards</Button>
            <Button variant="contained" color="secondary" onClick={clearLeaguePoints} >Clear Data</Button>
        </div>
    )
}


export default EndLeague