import React, { useContext } from 'react'
import { usePaystackPayment } from 'react-paystack'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { AppContext } from '../../contexts/AppContext'
import { ProfileContext } from '../../contexts/ProfileContext'
import PaymentIcon from '@material-ui/icons/Payment'
import Button from '@material-ui/core/Button'

const key = "pk_test_62afd0c26df44e46310cc3ac3d31530aa6e28e9e"



const BuyCoins = () => {
    const { themeClass } = useContext(AppContext)
    const { profile } = useContext(ProfileContext)
    const [coinAmount, setCoinAmount] = React.useState('')

    const config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: coinAmount * 100,
        publicKey: key,
    }
    const initializePayment = usePaystackPayment(config)

    const handleChange = (event) => {
        setCoinAmount(event.target.value);
    }

    const disable = coinAmount === '' ? true : false
    return (
        <div className={`coins-container ${themeClass}`}>
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
            <Button onClick={() => {initializePayment()}} color="secondary" variant="contained" disabled={disable}>Pay <PaymentIcon /></Button>
            </div>
        </div>
    );
}


export default BuyCoins



// const callback = (response) => {
//     console.log(response); // card charged successfully, get reference here
// }
// const close = () => {
//     console.log("Payment closed");
// }

// const getReference = () => {
//     //you can put any unique reference implementation code here
//     let text = "";
//     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

//     for (let i = 0; i < 15; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));

//     return text;
// }

// return (
//     <div>
//         <PaystackButton
//             metadata={{
//                 "custom_fields": [
//                     {
//                         "display_name": "Mobile Number",
//                         "variable_name": "mobile_number",
//                         //"value": number
//                     },

//                     {
//                         "display_name": "Buyer Name",
//                         "variable_name": "buyer_name",
//                         //"value": buyer
//                     },
//                     {
//                         "display_name": "Order Code",
//                         "variable_name": "order_code",
//                         // "value": code
//                     },
//                 ]
//             }}
//             text="Pay with Paystack"
//             className="payButton"
//             callback={callback}
//             close={close}
//             //disabled={disabled}
//             embed={false}
//             reference={getReference()}
//             email={"suzzwayne@gmail.com"}
//             amount={ 10000}
//             paystackkey={key}
//             tag="button"
//         />

//     </div>
// )