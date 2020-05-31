import React, { useContext } from 'react'
//import green_mark from './assets/green_mark.png'
import done_mark from './assets/done_mark.png'
import PieChart from './piechart/PieChart'
import { AppContext } from '../../../../contexts/AppContext'
import Button from '@material-ui/core/Button'


const StatsDetails = () => {
    const { themeClass } = useContext(AppContext)
    const correct = 30
    const total = 40
    const percentage = (correct / total) * 100
    let message;
    let color;

    if (percentage <= 30) {
        message = "You Need to try harder"
        color = "red"
    }
    else if (percentage > 30 && percentage < 70) {
        message = "Great Work but work harder"
        color = "orange"
    }
    else if (percentage >= 70) {
        message = "Great Job Done"
        color = "green"
    }


    return (
        <div className={`stats-details-container ${themeClass}`} >

            <div className="mark-img-container">
                <div className="img-container">
                    <img src={done_mark} alt="End Of Quiz" />

                </div>
                <h3>Quiz Has Ended</h3>
            </div>

            <PieChart />

            <div className="details-outline-container" >
                <div className="score-container">
                    <h3 style={{ color: color }}>Player's Score - {percentage}%</h3>
                </div>


                <ul className="summary-container"  >

                    <li><span>Questions</span> <span>50</span></li>
                    <li><span>Correct Answers</span> <span>25</span></li>
                    <li><span>Wrong Answers</span> <span>25</span></li>
                    <li><span>Coins Spent</span> <span>150</span></li>
                    <li><span>Hints Used</span> <span>10</span></li>
                    <li><span>50/50 Used</span> <span>5</span></li>

                </ul>

                <div className="remark-container">
                    <h3 style={{ color: color }} >{message}</h3>
                </div>


            </div>

            <div className="buttons-container">
                <Button color="secondary" variant="contained" >Play Again</Button>
                <Button color="primary" variant="contained" >Home Page</Button>
            </div>


        </div>
    )
}


export default StatsDetails