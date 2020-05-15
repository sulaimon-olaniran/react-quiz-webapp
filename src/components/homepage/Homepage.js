import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'


const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    return ( 
        <div className={`home-container ${themeClass}`}>
            <section className="first-section">
                <h3 className="welcome-note">Welcome to OS-Quiz</h3>

                <div className="wrapper">
                    <h1>Get Smart or die trying</h1>
                </div>
                
            </section>

            
        </div>

    )
}


export default HomePage