import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import app_logo from '../assets/app_logo.png'
import { AppContext } from '../../../contexts/AppContext'
import Button from '@material-ui/core/Button'
import HomeSharpIcon from '@material-ui/icons/HomeSharp'
import InfoSharpIcon from '@material-ui/icons/InfoSharp'
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import InfoIcon from '@material-ui/icons/Info'
import GamesIcon from '@material-ui/icons/Games'
import Zoom from '@material-ui/core/Zoom'
import StarIcon from '@material-ui/icons/Star'
import StarsIcon from '@material-ui/icons/Stars'
import FaceIcon from '@material-ui/icons/Face'
import PanToolIcon from '@material-ui/icons/PanTool'
import { ProfileContext } from '../../../contexts/ProfileContext'


function NavLinks() {
  const { menuLink, darkTheme, closeMenu } = useContext(AppContext)
  const { profile } = useContext(ProfileContext)

  const linkClass = menuLink ? darkTheme ? "navlink-con open darkMenu" :
    "navlink-con open lightMenu" : darkTheme ?
      "navlink-con darkMenu" : "navlink-con lightmenu"

      const adminId = "fHK2wfRDKigi9FCkXBRCBZAPzxZ2"

  return (
    <div className={linkClass} >
      <Link to="/">
        <Zoom in={menuLink}>
          <Button onClick={closeMenu} color="inherit"><div className="app-logo"><img src={app_logo} alt="Logo" /> </div></Button>
        </Zoom>
      </Link>

      <hr />

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '200ms' : '0ms' }}>
        <NavLink to="/" className="button-link" >
          <HomeSharpIcon /><Button color="inherit" size="small" onClick={closeMenu}>Home</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '300ms' : '0ms' }}>
        <NavLink to="/about" className="button-link">
          <InfoSharpIcon /><Button color="inherit" size="small" onClick={closeMenu}>About</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '400ms' : '0ms' }}>
        <NavLink exact to="/game/instructions" className="button-link">
          <PanToolIcon fontSize="small" /><Button color="inherit" size="small" onClick={closeMenu}>Instructions</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '500ms' : '0ms' }}>
        <NavLink to="/users" className="button-link">
          <FaceIcon /><Button color="inherit" size="small" onClick={closeMenu}>Users</Button>
        </NavLink>
      </Zoom>

      <hr className="divider" />

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '600ms' : '0ms' }}>
        <NavLink exact to="/demo" className="button-link">
          <SportsEsportsIcon /><Button color="inherit" size="small" onClick={closeMenu}>Quiz Demo</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '700ms' : '0ms' }}>
        <NavLink exact to="/league/rules" className="button-link">
          <GamesIcon /><Button color="inherit" size="small" onClick={closeMenu}>Quiz League</Button>
        </NavLink>
      </Zoom>
      
      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '800ms' : '0ms' }}>
        <NavLink to="/coins" className="button-link">
          <StarsIcon /><Button color="inherit" size="small" onClick={closeMenu}>Coins</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '900ms' : '0ms' }}>
        <NavLink exact to="/league/ranking" className="button-link">
          <StarIcon /><Button color="inherit" size="small" onClick={closeMenu}>Ranking</Button>
        </NavLink>
      </Zoom>

      

     { 
       profile && profile.id === adminId ?
       <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '900ms' : '0ms' }}>
        <NavLink exact to="/admin" className="button-link">
          <InfoIcon /><Button color="inherit" size="small" onClick={closeMenu}>Admin</Button>
        </NavLink>
      </Zoom>
      : null
      
    }


    </div>
  );
}

export default NavLinks
