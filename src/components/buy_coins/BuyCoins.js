import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { PaystackButton } from 'react-paystack'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { AppContext } from '../../contexts/AppContext'
import { ProfileContext } from '../../contexts/ProfileContext'
import PaymentIcon from '@material-ui/icons/Payment'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Zoom from '@material-ui/core/Zoom'
import CircularProgress from '@material-ui/core/CircularProgress'
import emailjs from 'emailjs-com'
//import Button from '@material-ui/core/Button'
import { db, auth } from '../../firebase/Firebase'
import firebase from '../../firebase/Firebase'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));


const key = "pk_live_021b771624706ca52d1e463ef7c40d3e22c44418"



const BuyCoins = () => {
    const [paymentSuccessModal, setPaymentSuccessModal] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState(null)
    const [updatingCoins, setUpdatingCoins] = useState(false)
    const [coinsStatus, setCoinsStatus] = useState(null)
    const { themeClass } = useContext(AppContext)
    const { profile } = useContext(ProfileContext)
    const [coinAmount, setCoinAmount] = useState('')
    const classes = useStyles()
    const userId = profile.id


    const handleCloseModal = () => {
        setPaymentSuccessModal(false)
    }

    const templatedId = "template_deSwDH1V"
    const serviceId = "default_service"
    const emailUserId = "user_RNUbsYPhfJlJuOMNRqX44"

    const handleCallBack = (response) => {
        const buyerDetails = {
            email: auth.currentUser && auth.currentUser.email,
            name: profile &&  profile.name,
            username: profile && profile.userName,
            amount : coinAmount,
            transaction: response && response.transaction,
            reference: response && response.reference
        }
        console.log(buyerDetails)
        setPaymentSuccessModal(true)
        setPaymentDetails(response)
        setUpdatingCoins(true)
        db.collection("users").doc(userId).update({
            coins: firebase.firestore.FieldValue.increment(coinAmount)
        })
            .then(() => {
                setTimeout(() => {
                    setUpdatingCoins(false)
                }, 500)
                setCoinsStatus("Successfull")

                emailjs.send(serviceId, templatedId, buyerDetails, emailUserId)
                    .then(() => console.log("email was sent"))

            })
            .catch(error => {
                setTimeout(() => {
                    setUpdatingCoins(false)
                }, 500)
                setCoinsStatus("Not Successfull")
            })

        setCoinAmount('')
    }

    const config = {
        reference: (new Date()).getTime(),
        email: auth.currentUser.email,
        amount: coinAmount * 100,
        publicKey: key,
        onSuccess: handleCallBack,
        onClose: () => null,

    }

    const handleChange = (event) => {
        setCoinAmount(event.target.value);
    }

    if (auth.currentUser === null) return <Redirect to="/signin" />
    return (
        <div className={`payment-coins-container ${themeClass}`}>

            <div className="coins-details-container" >
                <p>You have {profile && profile.coins} coins remaining </p>
            </div>

            <div className="payment-options-container" >
                <p>Choose amount of coins to buy below</p>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={coinAmount}
                    onChange={handleChange}>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={500}>500</MenuItem>
                    <MenuItem value={1000}>1000</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={3000}>3000</MenuItem>
                    <MenuItem value={4000}>4000</MenuItem>
                    <MenuItem value={5000}>5000</MenuItem>

                </Select>
                <h1>&#8358;{coinAmount}</h1>
            </div>

            <div className="payment-button" >
                <PaystackButton {...config}  ><span>Pay</span><PaymentIcon /></PaystackButton>
            </div>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={paymentSuccessModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Zoom in={paymentSuccessModal} >
                    <div className="payment-modal-container" >
                        <div className="transaction-details-container" >
                            <h1>Payment {paymentDetails && paymentDetails.status}</h1>
                            <h1>Reference No : {paymentDetails && paymentDetails.reference}</h1>
                            <h1>Transaction No : {paymentDetails && paymentDetails.transaction} </h1>
                        </div>

                        <div className="coins-status-container" >
                            {updatingCoins ? <h1>Updating Coins <CircularProgress /></h1> : <h1>Coins Update {coinsStatus}</h1>}
                        </div>
                    </div>
                </Zoom>

            </Modal>
        </div>
    );
}


export default BuyCoins


