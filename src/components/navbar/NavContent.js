import React, { useContext, Fragment } from 'react'
import { AppContext } from '../../contexts/AppContext'
import BackDrop from './backdrop/BackDrop'
import NavLinks from './navlinks/NavLinks'


const NavContent = () => {
    const { menuLink } = useContext(AppContext)

    return (
        <Fragment>
        {
            menuLink ?
            <BackDrop /> : null

        }
        <NavLinks />
        </Fragment>
    )
}


export default NavContent