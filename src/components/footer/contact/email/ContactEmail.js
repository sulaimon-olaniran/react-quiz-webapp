import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'
import FormikEmailForm from './EmailForm'
import Zoom from '@material-ui/core/Zoom'
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const ContactEmail = () => {
    const classes = useStyles()
    const [ emailModal, setEmailModal] = useState(false)
    
    const openEmailModal = () => {
        setEmailModal(true)
    }
    const closeEmailModal = () => {
        setEmailModal(false)
    }

    return (
        <div className="email-button" >
            <Button onClick={openEmailModal} color="secondary" variant="outlined" ><EmailIcon color="inherit" /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={emailModal}
                onClose={closeEmailModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={emailModal} >
                    <React.Fragment>
                        <FormikEmailForm />
                    </React.Fragment>
                </Zoom>
            </Modal>
        </div>
    )
}

export default ContactEmail