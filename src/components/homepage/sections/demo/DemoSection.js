import React from 'react'
import demo_img from './assets/demo_img.jpg'
import Button from '@material-ui/core/Button'

const DemoSection = () => (
    
        <div className="demo-section">
            <h1>Test Your IQ</h1>
            <div className="demo-image">
                <img src={demo_img} alt="DEMO" /> 
            </div>
            <p>Play demo to see if you up for the test</p>
            <Button color="inherit" size="large" variant="outlined">Play Demo</Button>
        </div>
   
)

export default DemoSection