import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const HomePage = () => {
    const { themeClass } = useContext(AppContext)
    return (
        <div className={`home-container ${themeClass}`}>

            <div className="main-section" >
                <div className="title-con">
                    <p>Time to become a Genius</p>
                    <div>
                  <NavLink exact to="/demo"><Button color="secondary" size="large" variant="contained" >Play Demo</Button></NavLink>
                  <NavLink exact to="/league/rules"><Button color="primary" size="large" variant="contained" >Join League</Button></NavLink>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default HomePage