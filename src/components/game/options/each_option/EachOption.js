import React, { useContext } from 'react'
import { GameContext } from '../../../../contexts/GameContext'

const EachOption = ({ option, answer, nextQuestion }) => {
    const {setRemovedIndex, setUsedFiftyFifty } = useContext(GameContext)

   const handleOption = (event) => {
        const optionValue = event.target.innerHTML.toLowerCase()
        const correctAnswer = answer.toLowerCase()
        setRemovedIndex([])
        setUsedFiftyFifty(false)
        nextQuestion()
        if( optionValue === correctAnswer){
          // console.log("Correct Answer")
   
        }
    }

    return (
        <React.Fragment >
            <p onClick={handleOption} >{option}</p>
            
        </React.Fragment>
    )
}

export default React.memo(EachOption)