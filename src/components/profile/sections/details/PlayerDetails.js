import React from 'react'

const PlayerDetails = ({ details }) => {

    const { totalPoints, leaguePosition, attempts, rightAnswers, wrongAnswers,
        fiftyUsed, hintsUsed, coinsSpent, successPercentage,
    } = details

    return (
        <div className="game-details-container">

            {/*<div><p><span className="title" >First Name</span> <span className="subject">Olaniran</span></p></div>
            <div><p><span className="title" >Last Name</span> <span className="subject">Oladipupo</span></p></div>
            <div><p><span className="title" >User Name</span> <span className="subject">Sly-Manny</span></p></div>*/}
            {/* <div><p><span className="title" >Nationality</span> <span className="subject">Nigerian</span></p></div> */}

            <div><p><span className="title" >Total Points</span> <span className="subject">{totalPoints} </span></p></div>
            <div><p><span className="title" >League Position</span> <span className="subject">{leaguePosition}</span></p></div>
            <div><p><span className="title" >Attempts</span> <span className="subject">{attempts}</span></p></div>
            <div><p><span className="title" >Right Answers</span> <span className="subject">{rightAnswers}</span></p></div>
            <div><p><span className="title" >Wrong Answers</span> <span className="subject">{wrongAnswers}</span></p></div>
            <div><p><span className="title" >Success Percentage</span> <span className="subject">{successPercentage}%</span></p></div>
            <div><p><span className="title" >50/50 Used</span> <span className="subject">{fiftyUsed}</span></p></div>
            <div><p><span className="title" >Hints Used</span> <span className="subject">{hintsUsed}</span></p></div>
            <div><p><span className="title" >Coins Spent</span> <span className="subject">{coinsSpent}</span></p></div>

        </div>
    )
}

export default PlayerDetails