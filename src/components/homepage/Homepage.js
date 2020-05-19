import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DemoSection from './sections/demo/DemoSection'
import LeagueSection from './sections/league/LeagueSection'
import JambSection from './sections/jamb/JambSection'
import PostJambSection from './sections/postjamb/PostJambSection'
//import Slide from '@material-ui/core/Slide'
//import Zoom from '@material-ui/core/Zoom'


const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    return (
        <div className={`home-container ${themeClass}`}>

            <div className="main-section" >
                <div className="title-con">
                    <p>become a Genius</p>
                </div>
            </div>

            <div className="sub-sections" >
                <DemoSection />

                <LeagueSection />

                <JambSection />

                <PostJambSection />
            </div>

        </div>

    )
}


export default HomePage