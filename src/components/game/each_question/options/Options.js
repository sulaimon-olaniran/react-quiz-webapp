import React from 'react'

const Options = ({ options, answers }) => {
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

    shuffleArray(finalOptions, randomFinalOptions, 3 )

    console.log(randomFinalOptions)
    return (
        <div>

        </div>
    )
}

export default Options