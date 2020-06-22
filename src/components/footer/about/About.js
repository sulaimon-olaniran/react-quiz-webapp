import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className="about-container">
            <h1>About OS-Quiz</h1>
            <div className="about-text">
                <p>
                    Os-Quiz was a project built to help people have fun, 
                    learn and gain new knowledges in the process.......
                </p>

            </div>
            <NavLink to="/about" >
                <Button color="secondary" size="large" variant="outlined">Learn More ...</Button>
            </NavLink>
        </div>
    )
}


export default About