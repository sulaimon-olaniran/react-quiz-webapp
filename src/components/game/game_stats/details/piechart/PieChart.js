import React, { useState, useContext } from 'react'
import { Pie } from 'react-chartjs-2'
import { GameContext } from '../../../../../contexts/GameContext'

const PieChart = () => {
    const { answeredRight, answeredWrong } = useContext(GameContext)
    // const right = answeredRight
    // const wrong = answeredWrong

    const [ pieState ] = useState({
        labels :["Passed", "Failed"],
        dataSets : [{
            data:[answeredRight, answeredWrong],
            backgroundColor : ["green", "red"]
        }]
        
    })

    return (
            <Pie
              data={{
                  labels : pieState.labels,
                  datasets : pieState.dataSets
              }}
              height = {100}
            />
        
    )
}

export default PieChart