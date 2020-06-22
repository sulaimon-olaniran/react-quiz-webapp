import React, { useContext } from 'react'
import Options from './options/Options'
import Question from './question/Question'
import GameDetails from './game_details/GameDetails'
import { AppContext } from '../../contexts/AppContext'

const GameQuestions = ({ currentOptions, currentAnswers, currentQuestions, coins, questionNumber, setQuestionNumber, totalQuestion, redirectTo }) => {
    const { themeClass } = useContext(AppContext)
    
    return (
        <div className={`game-container ${themeClass}`}  >

            <div className="quiz" >
                <GameDetails coins={coins} redirectTo={redirectTo} />
                <Question currentQuestions={currentQuestions} questionNumber={questionNumber} totalQuestion={totalQuestion} />
                <Options currentAnswers={currentAnswers} currentOptions={currentOptions} setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber} totalQuestion={totalQuestion} redirectTo={redirectTo} />

            </div>
        </div>
    )
}



export default React.memo(GameQuestions)




































    // const getRandomColor = () => {
    //     const letters = '0123456789ABCDEF';
    //     let color = '#5';
    //     for (let i = 0; i < 5; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }



//<a target="_blank" href="https://icons8.com/icons/set/coins--v1">Doodle icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>



//<DontRender options={questions[0].options} answers={questions[0].answers}/>



/*
import React, { useState, useContext, useRef } from 'react'
import EachQuestion from './each_question/EachQuestion'
import ReactCardCarousel from 'react-card-carousel'
import Timer from './timer/Timer'
import StarsIcon from '@material-ui/icons/Stars'
import { GameContext } from '../../contexts/GameContext'
import graphicOne from './assets/graphicOne.mp4'

const GameQuestions = () => {
    const [ hint, setHint ] = useState(0)
    const comTest = () => {
          setHint(prev => prev + 1)
    }

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
    ])

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const carouselRef = useRef(null)

    const nextCarousel = () => {
        carouselRef.current.next()
    }
    console.log(hint)

    return (
        <div className={`game-container `} >
             <video src={graphicOne} loop muted autoPlay></video>

            <div className="timer-container"style={{ background: getRandomColor() }} >
                <Timer />
                <p> 0/25</p>
            </div>

            <ReactCardCarousel
             ref={carouselRef}
            >
                {
                    questions && questions.map(question => {
                        return (
                            <div key={question.id} className="each-question-container" style={{ background: getRandomColor()  }} >

                                <EachQuestion questions={question} nextQuestion={nextCarousel}  />

                            </div>
                        )
                    })
                }
            </ReactCardCarousel>
            <div className="lifeline-container" style={{ background: getRandomColor()  }} >
                <div>
                    <p>50 : 50</p>
                    <p>40 <StarsIcon size="small" /></p>
                </div>

                <div onClick={comTest} >
                    <p>Hints</p>
                    <p>20 <StarsIcon size="small" /></p>
                </div>
            </div>


        </div>
    )
}

export default GameQuestions



*/

