import React, { useEffect, useState, useCallback } from 'react'
import { db } from '../../../../firebase/Firebase'

const PlayerDetails = ({ details }) => {
    const [ position, setPosition ] = useState()
    const { totalPoints, leaguePosition, attempts, rightAnswers, wrongAnswers,
        fiftyUsed, hintsUsed, coinsSpent,  id, leaguePoints
    } = details && details


    const checkIndex = useCallback ((index) => {
        return index.id === id
    }, [id])

    const getUsersData = useCallback(() => {
        db.collection("users").onSnapshot(docs => {
            const users = []
            docs.forEach(doc => {
                users.push(doc.data())
            })

            const sortedUsers = users.sort(function (a, b) { return b.leaguePoints - a.leaguePoints })

            const leaguePosition = sortedUsers.findIndex(checkIndex)
            //console.log(leaguePosition)

            return db.collection("users").doc(id).update({
                leaguePosition : leaguePosition + 1
            }).then(() =>{
                setPosition(leaguePosition + 1)
            })
           
        })
    }, [checkIndex, id])

    let suffix = ""
    if(position === 1){
        suffix = "st"
    }else if(position === 2){
        suffix = "nd"
    }
    else if( position === 3){
        suffix = "rd"
    }
    else{
        suffix = "th"
    }


    useEffect(() =>{
        getUsersData()
        
    }, [getUsersData])
    
    return (
        <div className="game-details-container">

            <div><p><span className="title" >Total Points</span> <span className="subject">{totalPoints} </span></p></div>
            <div><p><span className="title" >Current Points</span> <span className="subject">{leaguePoints} </span></p></div>
            <div><p><span className="title" >Current Position</span> <span className="subject">{leaguePosition}{suffix}</span></p></div>
            <div><p><span className="title" >Total Attempts</span> <span className="subject">{attempts}</span></p></div>
            <div><p><span className="title" >Right Answers</span> <span className="subject">{rightAnswers}</span></p></div>
            <div><p><span className="title" >Wrong Answers</span> <span className="subject">{wrongAnswers}</span></p></div>
            <div><p><span className="title" >50/50 Used</span> <span className="subject">{fiftyUsed}</span></p></div>
            <div><p><span className="title" >Hints Used</span> <span className="subject">{hintsUsed}</span></p></div>
            <div><p><span className="title" >Coins Spent</span> <span className="subject">{coinsSpent}</span></p></div>

        </div>
    )
}

export default PlayerDetails