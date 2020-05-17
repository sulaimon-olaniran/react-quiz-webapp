import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DemoSection from './sections/demo/DemoSection'
import LeagueSection from './sections/league/LeagueSection'
import JambSection from './sections/jamb/JambSection'
import PostJambSection from './sections/postjamb/PostJambSection'
import Slide from '@material-ui/core/Slide'
import Zoom from '@material-ui/core/Zoom'


const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    const [checked, setChecked] = React.useState(true)
    return (
        <div className={`home-container ${themeClass}`}>
                <div className="first-section" >
                    <div className="title-con">
                        <p>become a Genius</p>
                    </div>
                </div>
            <DemoSection />
            <LeagueSection />
            <JambSection />
            <PostJambSection />

        </div>

    )
}


export default HomePage