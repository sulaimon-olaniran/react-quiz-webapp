import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import CoverImageUpload from './upload/CoverUpload'
import { ProfileContext } from '../../../../contexts/ProfileContext'
import Avatar from '@material-ui/core/Avatar'
//import cover_photo from '../../../profile/sections/picture/assets/cover_photo.jpg'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const CoverImage = () => {
    const classes = useStyles()
    const [imageModal, setImageModal] = useState(false)
    const { profile } = useContext(ProfileContext)

    const openImageModal = () => {
        setImageModal(true)
    }
    const closeImageModal = () => {
        setImageModal(false)
    }


    return (
        <div className="profile-picture-container" >
            <h3>Cover Picture</h3>
            <div className="profile-image-container" >
            <Avatar src={profile.coverImage} alt="Display P" />
            </div>

            <Button color="secondary" variant="contained" onClick={openImageModal}  >Change Image</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={imageModal}
                onClose={closeImageModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={imageModal} >
                    <React.Fragment>
                        <CoverImageUpload />
                    </React.Fragment>
                </Zoom>
            </Modal>
        </div>
    )
}

export default CoverImage