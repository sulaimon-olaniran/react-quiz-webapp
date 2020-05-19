import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import jamb_logo from '../assets/jamb_logo.png'
import app_logo from '../assets/app_logo.png'
import { AppContext } from '../../../contexts/AppContext'
import Button from '@material-ui/core/Button'
import HomeSharpIcon from '@material-ui/icons/HomeSharp'
import InfoSharpIcon from '@material-ui/icons/InfoSharp'
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import Zoom from '@material-ui/core/Zoom'


function NavLinks() {
  const { menuLink, darkTheme, closeMenu } = useContext(AppContext)

  const linkClass = menuLink ? darkTheme ? "navlink-con open darkMenu" :
    "navlink-con open lightMenu" : darkTheme ?
      "navlink-con darkMenu" : "navlink-con lightmenu"

  return (
    <div className={linkClass} >
       <Zoom in={menuLink}>
        <Button onClick={closeMenu} color="inherit"><div className="app-logo"><img src={app_logo} alt="Logo" /> </div></Button>
      </Zoom>

      <hr />

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '100ms' : '0ms' }}>
        <NavLink to="#" className="button-link" >
          <HomeSharpIcon /><Button color="inherit" size="medium" >Home</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '300ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <InfoSharpIcon /><Button color="inherit" size="medium">About</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '500ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <ContactSupportSharpIcon /><Button color="inherit" size="medium">Contact</Button>
        </NavLink>
      </Zoom>

      <hr className="divider"  />

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '700ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <SportsEsportsIcon /><Button color="inherit" size="medium">Quiz Demo</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '900ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <WbIncandescentIcon /><Button color="inherit" size="medium">Quiz League</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '1100ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <img src={jamb_logo} alt="jamb" width="20px" height="20px" /><Button color="inherit" size="medium">JAMB PQ</Button>
        </NavLink>
      </Zoom>

      <Zoom in={menuLink} style={{ transitionDelay: menuLink ? '1300ms' : '0ms' }}>
        <NavLink to="#" className="button-link">
          <img src={jamb_logo} alt="jamb" width="20px" height="20px" /><Button color="inherit" size="medium">Post JAMB</Button>
        </NavLink>
      </Zoom>


    </div>
  );
}

export default NavLinks
