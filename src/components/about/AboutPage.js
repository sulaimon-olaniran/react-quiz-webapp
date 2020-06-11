import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import SecondSection from './sections/secondSection/SecondSection'
import ThirdSection from './sections/third_section/ThirdSection'
import ForthSection from './sections/forth_section/ForthSection'
import FirstSection from './sections/firstSection/FirstSection'


const AboutPage = () => {
    const { themeClass } = useContext(AppContext)

    return (
        <div className={`about-page-container ${themeClass}`} >
            <div className="sections-container">
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ForthSection />
            </div>
        </div>
    )
}

export default AboutPage