import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import DemoSection from './sections/demo/DemoSection'
import LeagueSection from './sections/league/LeagueSection'

const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    return (
        <div className={`home-container ${themeClass}`}>

            <div className="first-section" >
                <div className="title-con">
                    <p>become a Genius</p>
                </div>
            </div>
             <DemoSection />
             <LeagueSection />

        </div>

    )
}


export default HomePage