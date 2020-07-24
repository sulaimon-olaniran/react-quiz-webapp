import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const HomePage = () => {
    const [count, setCount] = useState(0)
    const { themeClass } = useContext(AppContext)

    const handleCount = () =>{
        setCount(prev => prev + 1)
    }

    const adPath = 'https://www.profitablegate.com/rvu3niq8rq?key=8ab5a707d4bdcc70b6c175076243622c'
    const linkToAd = <a href={adPath} target="_blanak" rel="noopener noreferrer" ><Button color="secondary" size="large" variant="contained"
    onClick={handleCount} >Play Demo</Button></a>
    const linkToDemo = <NavLink exact to="/demo"><Button color="secondary" size="large" variant="contained" >Play Demo</Button></NavLink>
    const demoLink = count > 0 ? linkToDemo : linkToAd
    return (
        <div className={`home-container ${themeClass}`}>

            <div className="main-section" >
                <div className="title-con">
                    <p>Time to become a Genius</p>
                    <div>
                  { demoLink}
                  <NavLink exact to="/league/rules"><Button color="primary" size="large" variant="contained" >Join League</Button></NavLink>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default HomePage