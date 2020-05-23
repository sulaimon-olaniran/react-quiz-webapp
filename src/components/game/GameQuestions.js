import React, { useState, useContext } from 'react'
import EachQuestion from './each_question/EachQuestion'
import { AppContext } from '../../contexts/AppContext'
import ReactCardCarousel from 'react-card-carousel'
import Timer from './timer/Timer'
import StarsIcon from '@material-ui/icons/Stars';

const GameQuestions = () => {
    const { themeClass } = useContext(AppContext)
    const [questions] = useState([
        {
            question: "Who is done Luchese ?",
            options: ["Mafia", "Mafia Boss", "American", "American Gangsta", "Citizen", "Lah Lah"],
            answers: ["Nobody", "Unknown", "No One"],
            id: 1
        },
        {
            question: "Who is Jimmy Falcone ?",
            options: ["Don Luchese", "Don Cabone Boss", "Don Cabone", "King Lucifer", "Blah Blah"],
            answers: ["Cheech Uncle", "Jimbo", "Pete's Dad"],
            id: 2
        },
        {
            question: 'Who is Don Sly ?',
            options: ["Notorious Gangsta", "Tupac Shakur", "Eminem", "Mommy's Boy", "Gang Leader", "Poet"],
            answers: ["Rapper", "Programmer", "Transporter"],
            id: 3
        },
        {
            question: "How many days can be in a year or found in a leap year ?",
            options: ["300", "303", "345", "354", "330", "150"],
            answers: ["365", "365", "366"],
            id: 4
        }
    ])//autoplay={true}


    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    return (
        <div className={`game-container ${themeClass}`} >
            <div className="timer-container" >
                <Timer />
                <p>0/25</p>
            </div>

            <ReactCardCarousel autoplay={true} autoplay_speed={2500} >
                {
                    questions && questions.map(question => {
                        return (
                            <div key={question.id} className="each-question-container" style={{ background: getRandomColor() }} >

                                <EachQuestion questions={question} />

                            </div>
                        )
                    })
                }
            </ReactCardCarousel>
            <div className="lifeline-container" >
                <div>
                    <p>50 : 50</p>
                    <p>40 <StarsIcon size="small" /></p>
                </div>

                <div>
                    <p>Hints</p>
                    <p>20 <StarsIcon size="small" /></p>
                </div>
            </div>
        </div>
    )
}

export default GameQuestions

