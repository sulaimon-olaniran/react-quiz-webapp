import React, { useContext, useState } from 'react'
import cover_photo from './assets/cover_photo.jpg'
import Avatar from '@material-ui/core/Avatar'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import { AppContext } from '../../../../contexts/AppContext'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
     // width: 400,
     // backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
    },
  }));


const ProfilePicture = ({ details }) => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle)
    const [ openDp, setOpenDp ] = useState(false)
    const [ openCover, setOpenCover ] = useState(false)
    const { darkTheme } = useContext(AppContext)

    const viewDisplayImage = () => {
        setOpenDp(true)
    }
    const viewCoverImage = () =>{
       setOpenCover(true)
    }
    const handleClose = () => {
        setOpenDp(false);
        setOpenCover(false)
      }

    const coverImage = details.coverImage === "" ? cover_photo : details.coverImage


    const color = darkTheme ? "rgb(26, 25, 25)" : "rgb(226, 226, 226)"

    return (
        <div className="profile-picture-container" >

            <div className="cover-photo-container" onClick={viewCoverImage} >
                <img src={coverImage} alt="Cover" />

            </div>

            <div className="photo-container" style={{ color: color }} >
                <Avatar src={details.displayImage} alt="DP" onClick={viewDisplayImage} />
            </div>

            <Modal
                open={openDp}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}  >
                    <img src={details.displayImage} alt="DP" />
                </div>

            </Modal>
            <Modal
                open={openCover}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}  >
                    <img src={coverImage} alt="DP" />
                </div>

            </Modal>

        </div>
    )
}


export default ProfilePicture