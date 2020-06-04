import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const MyPasswordField = ({setFieldValue}) => {

    const [showPassword, setShowPassWord] = useState(false)
   // const [ password, setPassword ] = useState("")

    const handleShowPassword = () => {
        setShowPassWord(prev => !prev)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleChange = (e) =>{
        //setPassword(e.target.value)
        setFieldValue("password", e.target.value)
    }
    return (
        <FormControl >
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                //value={password}
                //name="password"
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )

}

export default MyPasswordField