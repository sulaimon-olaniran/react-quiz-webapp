import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import Button from '@material-ui/core/Button'

//import Slide from '@material-ui/core/Slide'
//import Zoom from '@material-ui/core/Zoom'


const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    console.log("home page")
    return (
        <div className={`home-container ${themeClass}`}>

            <div className="main-section" >
                <div className="title-con">
                    <p>Time to become a Genius</p>
                    <div>
                  <Button color="secondary" size="large" variant="contained" >Play Demo</Button> 
                  <Button color="primary" size="large" variant="contained" >Join League</Button>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default HomePage