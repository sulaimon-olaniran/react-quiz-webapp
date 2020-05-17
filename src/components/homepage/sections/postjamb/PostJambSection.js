import React from 'react'
import Button from '@material-ui/core/Button'
import post_utme from './assets/post_utme.jpeg'

const PostJambSection = () => (
    
        <div className="post-jamb-section">
            <h1>POST UTME PAST QUESTIONS</h1>
            <div className="post-jamb-image">
                <img src={post_utme} alt="JAMB" /> 
            </div>
            <p>A Nigerian preparing for POST UTME?</p>
            <Button color="inherit" size="large" variant="outlined">Take Quiz</Button>
        </div>
   
)

export default PostJambSection