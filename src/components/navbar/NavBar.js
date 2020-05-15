import React, { useState, useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { AppContext } from '../../contexts/AppContext'
import logo_head from './logo_head.png'




const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const {toggleTheme, darkTheme, themeClass, toggleMenu } = useContext(AppContext)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const useStyles = makeStyles({
        paper: {
          background: !darkTheme ? "rgb(223, 221, 221)" : "rgb(75, 73, 73)",
          color: !darkTheme ? "rgb(75, 73, 73)" : "rgb(228, 228, 228)"
        }
      });

    const styles = useStyles()
    
    return (
        <nav className={themeClass}>
            <div className="menu-con">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} >
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
         <div className="logo-head" >
             <img src={logo_head} alt="Logo" />
         </div>

            <div className="theme-con">
            <FormControlLabel
                    control={<Switch size="small" color="default" checked={darkTheme} onChange={toggleTheme} />}
                    label="Dark Mode"
                    labelPlacement="top"
                />
            </div>

            <div className="auth-con">

                <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick} >
                    <AccountCircleIcon fontSize="large" />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    classes={{ paper: styles.paper }}
                >
                    <MenuItem onClick={handleClose} >Sign In</MenuItem>
                    <MenuItem onClick={handleClose} >Sign Up</MenuItem>
                </Menu>
            </div>
        </nav>
    )
}


export default NavBar