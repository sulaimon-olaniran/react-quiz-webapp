import React from 'react'
import Button from '@material-ui/core/Button'

const About = () => {
    return (
        <div className="about-container">
            <h1>About OS-Quiz</h1>
            <div className="about-text">
                <p>
                    This project was built to help people have learn while they
                    having fun, and also prepare them for exams and have wide 
                    ideas of .......
                </p>

            </div>
             <Button color="secondary" size="large" variant="outlined">Learn More ...</Button>
        </div>
    )
}


export default About