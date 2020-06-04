import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import FirstSection from './sections/first_section/FirstSection'
//import SecondSection from './sections/second_section/SecondSection'
import ThirdSection from './sections/third_section/ThirdSection'
import ForthSection from './sections/forth_section/ForthSection'
import SummarySection from './sections/summary/Summary'
//import AboutMeSection from './sections/about_me/AboutMe'


const AboutPage = () => {
    const { themeClass } = useContext(AppContext)
    
    return(
        <div className={`about-page-container ${themeClass}`} >
         <SummarySection />
         <FirstSection />
         <ThirdSection />
         <ForthSection />
        </div>
    )
}

export default AboutPage