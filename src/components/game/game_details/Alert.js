import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { GameContext } from '../../../contexts/GameContext'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}


const GameAlert = () => {
    const { wrongAnswer, rightAnswer, setRightAnswer, setWrongAnswer } = useContext(GameContext)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setWrongAnswer(false)
        setRightAnswer(false)
      }

    
    return (
        <div>
            <Snackbar open={rightAnswer} autoHideDuration={500} onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
            >
                <Alert onClose={handleClose} severity="success">
                   You're Correct
                 </Alert>
            </Snackbar>

            <Snackbar open={wrongAnswer} autoHideDuration={500} onClose={handleClose}
            anchorOrigin={{ vertical:"top", horizontal:"right" }}
            >
                <Alert onClose={handleClose} severity="error">
                   You're Wrong
                 </Alert>
            </Snackbar>
        </div>

    )
}


export default GameAlert