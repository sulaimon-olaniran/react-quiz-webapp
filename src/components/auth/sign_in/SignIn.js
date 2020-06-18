import React, { useContext } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { withFormik, Field, Form } from 'formik'
import { AppContext } from '../../../contexts/AppContext'
import albert_einstein from './assets/albert_einstein.png'
import { SignInYupValidation } from '../assets/Validation'
import TextField from '@material-ui/core/TextField'
import MyPasswordField from '../assets/MyPassword'
import Button from '@material-ui/core/Button'
import { auth } from '../../../firebase/Firebase'
import Loader from '../../loader/Loader'

const SignInPage = ({ setFieldValue, handleBlur, touched, errors, isSubmitting, status }) => {
    const { themeClass } = useContext(AppContext)
    const message= "Logging User In"
    
    if(auth.currentUser !== null) return <Redirect to="/profile" />
    if (status && status.loading) return <Loader loading={isSubmitting} message={message} />
    else {
        return (
            <div className={`signin-container ${themeClass}`} >
                <div className="form-container" >
                    <h3>Welcome Home Genius</h3>

                    <div className="signin-image-container"  >
                        <img src={albert_einstein} alt="Albert" />

                    </div>

                    <Form autoComplete="off">
                        <Field as={TextField} type="email" name="email" label="Email"
                            error={touched.email && errors.email ? true : false}
                            helperText={touched.email ? errors.email : null}
                        />
                        <MyPasswordField setFieldValue={setFieldValue} handleBlur={handleBlur}
                            error={touched.password && errors.password ? true : false}
                            errorMessage={errors.password}
                        />



                        <Field type="submit" as={Button} variant="contained" color="secondary" id="button" disabled={isSubmitting}>Sign In</Field>
                        {status && status.error && <small style={{color:"red"}}>{status && status.error}</small>}
                    </Form>
                    <p>Not yet a Genius ? <NavLink to="/signup"><Button color="primary" size="small">Sign Up</Button></NavLink></p>
                </div>


            </div>
        )
    }
}

const FormikSignInPage = withFormik({
    mapPropsToValues() {
        return {
            email: "",
            password: ""
        }
    },

    validationSchema: SignInYupValidation,

    handleSubmit(values, { props, setStatus, setSubmitting }) {
        const { email, password } = values
        setSubmitting(true)
        setStatus({loading : true})
        setStatus(true)

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                setSubmitting(false)
                setTimeout(() => {
                    props.history.push('/profile')
                }, 1000)
            }).catch(error =>{
                setSubmitting(false)
                console.log(error)
                setStatus({loading : false})
                setStatus({error : "Wrong Email or Password"})
            })

    }
})(SignInPage)

export default FormikSignInPage

