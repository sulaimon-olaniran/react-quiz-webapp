import React, { useContext, useState } from 'react'
import cover_photo from './assets/cover_photo.jpg'
import Avatar from '@material-ui/core/Avatar'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Zoom from '@material-ui/core/Zoom'
import { AppContext } from '../../../../contexts/AppContext'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const ProfilePicture = ({ details }) => {
    const classes = useStyles()
    const [openDp, setOpenDp] = useState(false)
    const [openCover, setOpenCover] = useState(false)
    const { darkTheme } = useContext(AppContext)

    const viewDisplayImage = () => {
        details.displayImage && setOpenDp(true)
    }
    const viewCoverImage = () => {
        setOpenCover(true)
    }
    const handleClose = () => {
        setOpenDp(false);
        setOpenCover(false)
    }

    const coverImage = details && details.coverImage === "" ? cover_photo : details && details.coverImage


    const color = darkTheme ? "rgb(26, 25, 25)" : "rgb(226, 226, 226)"

    return (
        <div className="user-profile-picture-container" >

            <div className="cover-photo-container" onClick={viewCoverImage} >
                <img src={coverImage} alt="Cover" />

            </div>

            <div className="photo-container" style={{ color: color }} >
                <Avatar src={details && details.displayImage} alt="DP" onClick={viewDisplayImage} />
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openDp}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={openDp} >
                    <div className="view-image-container" >
                        <img src={details && details.displayImage} alt="DP" />
                    </div>
                </Zoom>

            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openCover}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={openCover} >
                    <div className="view-image-container" >
                        <img src={coverImage} alt="Cover" />
                    </div>
                </Zoom>

            </Modal>
        </div>
    )
}


export default ProfilePicture