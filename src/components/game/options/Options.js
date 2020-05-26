import React from 'react'
import EachOption from './each_option/EachOption'
import FiftyFifty from './life_lines/fifty_fifty/FiftyFifty'
import Hints from './life_lines/hints/Hints'

const Options = ({ options, answers, nextQuestion }) => {
    
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    const randomOptions = []
    const randomFinalOptions = []

    // function for shuffling array
    

    const shuffleArray = (oldArray, newArray, arrayLength) => {
        while (newArray.length <= arrayLength) {
            const random = oldArray[Math.floor(Math.random() * oldArray.length)]
            if (!newArray.includes(random)) {
                newArray.push(random)
            }
        }

    }
    shuffleArray(options, randomOptions, 2)

    const finalOptions = randomOptions.concat(randomAnswer)

    shuffleArray(finalOptions, randomFinalOptions, 3)

    return (
        <div className="options-container" >
            {
                randomFinalOptions && randomFinalOptions.map((option, index) => {
                    return (
                        <div className="each-option-container" key={index} >
                            <EachOption option={option} answer={randomAnswer} nextQuestion={nextQuestion} />
                        </div>

                    )
                })
            }
            <div className="life-lines-container" >
                <FiftyFifty answer={randomAnswer} />
                <Hints answer={randomAnswer} />

            </div>
        </div>
    )
}

export default React.memo(Options)









/*
class DontRender  extends React.PureComponent{

    shouldComponentUpdate(nextProps, nextState){
       return nextProps === this.props
    }
    
    constructor(props){
        super(props);
    }
    render(){
        const { options, answers } = this.props

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        const randomOptions = []
        const randomFinalOptions = []
        const shuffleArray = (oldArray, newArray, arrayLength) => {
            while (newArray.length <= arrayLength) {
                const random = oldArray[Math.floor(Math.random() * oldArray.length)]
                if (!newArray.includes(random)) {
                    newArray.push(random)
                }
            }
    
        }
        shuffleArray(options, randomOptions, 2)
    
        const finalOptions = randomOptions.concat(randomAnswer)
    
        shuffleArray(finalOptions, randomFinalOptions, 3)

        const pickOptions = () => {
            const options = Array.from(document.activeElement.querySelectorAll('.each-option-container'))
            console.log(options)
        }
         
        
        return(
         <div className="options-container" >
            {
                randomFinalOptions && randomFinalOptions.map((option, index) => {
                    return (
                        <div className="each-option-container" key={index} >
                            <EachOption option={option} answer={randomAnswer} pickOptions={pickOptions} />
                        </div>

                    )
                })
            }
        </div>
        )
    }
}

export default DontRender*/