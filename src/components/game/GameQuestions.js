import React, { useState, useContext } from 'react'
import EachQuestion from './each_question/EachQuestion'
import { AppContext } from '../../contexts/AppContext'
import ReactCardCarousel from 'react-card-carousel'

const GameQuestions = () => {
    const { themeClass } = useContext(AppContext)
    const [questions] = useState([
        {
            question: "Who is done Luchese ?",
            options : ["Mafia", "Mafia Boss", "American", "American Gangsta", "Citizen", "Lah Lah"],
            answers :  ["Nobody", "Unknown", "No One"],
            id : 1
        },
        {
            question : "Who is Jimmy Falcone ?",
            options : ["Don Luchese", "Don Cabone Boss", "Don Cabone", "King Lucifer", "Blah Blah"],
            answers : ["Cheech Uncle", "Jimbo", "Pete's Dad"],
            id : 2
        },
        {
            question : 'Who is Don Sly ?',
            options : ["Notorious Gangsta", "Tupac Shakur", "Eminem", "Mommy's Boy", "Gang Leader", "Poet"],
            answers : ["Rapper", "Programmer", "Transporter"],
            id : 3
        },
        {
            question : "How many days can be in a year ?",
            options : ["300", "303", "345", "354", "330", "150"],
            answers : ["365", "365", "366"],
            id : 4
        }
    ])

    

    const [x, setX] = useState(0)
    const handleNext = () => {
        x === -100 * (questions.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className={`game-contaner ${themeClass}`} >
            <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }  >
            {
                questions && questions.map( question => {
                    return (
                        <div key={question.id} className="each-question-container"
                       // style={{ transform: `translateX(${x}%)` }}
                        >
                          <EachQuestion questions={question} />
                          <h1>{question.id}</h1>
                        </div>
                    )
                })
            }
            </ReactCardCarousel>
        </div>
    )
}

export default GameQuestions