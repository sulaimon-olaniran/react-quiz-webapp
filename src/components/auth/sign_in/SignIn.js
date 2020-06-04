import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { withFormik, Field, Form } from 'formik'
import { AppContext } from '../../../contexts/AppContext'
import albert_einstein from './assets/albert_einstein.png'
//import albert_einstein from '../sign_up/assets/albert_einstein.png'
import TextField from '@material-ui/core/TextField'
import MyPasswordField from '../assets/MyPassword'
import Button from '@material-ui/core/Button'

const SignInPage = ({ setFieldValue }) => {
    const { themeClass } = useContext(AppContext)

    return (
        <div className={`signin-container ${themeClass}`} >
            <div className="form-container" >
                <h3>Welcome Home Genius</h3>

                <div className="signin-image-container"  >
                    <img src={albert_einstein} alt="Albert" />

                </div>

                <Form>
                    <Field as={TextField} type="email" name="email" label="Email" />
                    <MyPasswordField setFieldValue={setFieldValue}/>
                    <Field type="submit" as={Button} variant="contained" color="secondary">Sign In</Field>
                </Form>
                <p>Not yet a Genius ? <NavLink to="/signup"><Button color="primary" size="small">Sign Up</Button></NavLink></p>
            </div>


        </div>
    )
}

const FormikSignInPage = withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        }
    },
    handleSubmit(values){

        console.log(values)
    }
})(SignInPage)

export default FormikSignInPage

