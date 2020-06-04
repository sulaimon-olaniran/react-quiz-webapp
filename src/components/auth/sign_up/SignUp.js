import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { withFormik, Field, Form } from 'formik'
import { AppContext } from '../../../contexts/AppContext'
import albert_einstein from './assets/albert_einstein.png'
import TextField from '@material-ui/core/TextField'
import MyPasswordField from '../assets/MyPassword'
import Button from '@material-ui/core/Button'

const SignUpPage = ({ setFieldValue }) => {
    const { themeClass } = useContext(AppContext)

    return (
        <div className={`sign-up-container ${themeClass}`} >
            <div className="form-container" >
                <h3>Become a Genius</h3>

                <div className="signup-image-container"  >
                    <img src={albert_einstein} alt="Albert" />

                </div>

                <Form>
                    <Field as={TextField} type="Text" name="firstName" label="First Name" />
                    <Field as={TextField} type="Text" name="lastName" label="Last Name" />
                    <Field as={TextField} type="email" name="email" label="Email" />
                    <MyPasswordField setFieldValue={setFieldValue}/>
                    <Field type="submit" as={Button} variant="contained" color="secondary">Join Now</Field>
                </Form>
                <p>Already a Genius ? <NavLink to="/signin"><Button color="primary" size="small">Log In</Button></NavLink></p>
            </div>


        </div>
    )
}

const FormikSignUpPage = withFormik({
    mapPropsToValues() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    },
    handleSubmit(values){

        console.log(values)
    }
})(SignUpPage)

export default FormikSignUpPage

