import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { AppContext } from '../../contexts/AppContext'
import Avatar from '@material-ui/core/Avatar'
//import profile_picture from './assets/profile_picture.png'
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone'
import SettingsIcon from '@material-ui/icons/Settings'
import { auth } from '../../firebase/Firebase'
import { ProfileContext } from '../../contexts/ProfileContext'
import user_avatar from '../profile/sections/picture/assets/user_avatar.png'


const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElTwo, setAnchorElTwo] = useState(null)
    const { toggleTheme, darkTheme, themeClass, toggleMenu, loggedIn } = useContext(AppContext)
    const { profile } = useContext(ProfileContext)

    let profileImage = profile === null || profile.displayImage === "" ? user_avatar : profile.displayImage
    
    const handleClickOffline = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClickOnline = (event) => {
        setAnchorElTwo(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElTwo(null);
    };

    const handleLogOut = () => {
        handleClose()
        auth.signOut()
    }

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
                    <MenuIcon fontSize="small" />
                </IconButton>
            </div>


            <div className="theme-con">
                <FormControlLabel
                    control={<Switch size="small" color="default" checked={darkTheme} onChange={toggleTheme} />}
                    label="Dark Mode"
                    labelPlacement="top"
                    size="small"
                />
            </div>

            <div className="auth-con">
                {
                    !loggedIn ?
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClickOffline} >
                            <AccountCircleIcon fontSize="small" />
                        </IconButton>

                        :
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClickOnline} >
                            <Avatar alt="Remy Sharp" src={profileImage} size="small" />
                        </IconButton>
                }

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    classes={{ paper: styles.paper }}
                >
                    <NavLink to="/signin"> <MenuItem onClick={handleClose} >Sign In</MenuItem></NavLink>
                    <NavLink to="/signup"><MenuItem onClick={handleClose} >Sign Up</MenuItem></NavLink>
                </Menu>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorElTwo}
                    keepMounted
                    open={Boolean(anchorElTwo)}
                    onClose={handleClose}
                    classes={{ paper: styles.paper }}
                >
                    <NavLink exact to="/profile">
                        <MenuItem onClick={handleClose} > <PersonTwoToneIcon size="small" /> Profile</MenuItem>
                    </NavLink>
                    <NavLink exact to="/settings">
                        <MenuItem onClick={handleClose} > <SettingsIcon size="small" /> Settings</MenuItem>
                    </NavLink>
                    <MenuItem onClick={handleLogOut} > <LockTwoToneIcon size="small" /> Log Out</MenuItem>
                </Menu>
            </div>


        </nav>
    )
}



export default NavBar