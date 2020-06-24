import React, { useContext } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { SignUpYupValidation } from '../assets/Validation'
import { withFormik, Field, Form } from 'formik'
import { AppContext } from '../../../contexts/AppContext'
import albert_einstein from './assets/albert_einstein.png'
import TextField from '@material-ui/core/TextField'
import MyPasswordField from '../assets/MyPassword'
import Button from '@material-ui/core/Button'
import { auth, db } from '../../../firebase/Firebase'
import Loader from '../../loader/Loader'


const SignUpPage = ({ setFieldValue, handleBlur, touched, errors, isSubmitting, status }) => {
    const { themeClass } = useContext(AppContext)
    const message = "Signing User Up"
    
    if(auth.currentUser !== null) return <Redirect to="/profile" />
    if (status && status.loading) return <Loader loading={isSubmitting} message={message} />
    else {
        return (
            <div className={`sign-up-container ${themeClass}`} >
                <div className="form-container" >
                    <h3>Become a Genius</h3>

                    <div className="signup-image-container"  >
                        <img src={albert_einstein} alt="Albert" />

                    </div>

                    <Form autoComplete="off" >
                        <Field as={TextField} type="Text" name="firstName" label="First Name"
                            error={touched.firstName && errors.firstName ? true : false}
                            helperText={touched.firstName ? errors.firstName : null}
                        />

                        <Field as={TextField} type="Text" name="lastName" label="Last Name"
                            error={touched.lastName && errors.lastName ? true : false}
                            helperText={touched.lastName ? errors.lastName : null}
                        />

                        <Field as={TextField} type="email" name="email" label="Email"
                            error={touched.email && errors.email ? true : false}
                            helperText={touched.email ? errors.email : null}
                        />

                        <MyPasswordField
                            setFieldValue={setFieldValue} handleBlur={handleBlur}
                            error={touched.password && errors.password ? true : false}
                            errorMessage={errors.password}
                        />

                        <Field type="submit" as={Button} variant="contained" color="secondary" id="button" disabled={isSubmitting}>Join Now</Field>
                        {status && status.error && <small style={{color:"red"}}>{status && status.error}</small>}
                    </Form>
                    <p>Already a Genius ? <NavLink to="/signin"><Button color="primary" size="small">Log In</Button></NavLink></p>
                </div>


            </div>
        )
    }
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

    validationSchema: SignUpYupValidation,

    handleSubmit(values, { props, setSubmitting, setStatus, setErrors }) {
        const { email, password, firstName, lastName } = values
        console.log(values)
        setSubmitting(true)
        setStatus({loading : true})
        auth.createUserWithEmailAndPassword(
            email,
            password
        )
            .then((res) => {
                return db.collection("users").doc(res.user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    name : firstName + " " + lastName,
                    id: res.user.uid,
                    sex: "",
                    country: "",
                    state: "",
                    displayImage: "",
                    coverImage: "",
                    phoneNumber: "",
                    instagram: "",
                    twitter: "",
                    facebook: "",
                    about: "",
                    totalPoints: 0,
                    leaguePoints : 0,
                    leaguePosition: null,
                    attempts: 0,
                    rightAnswers: 0,
                    wrongAnswers: 0,
                    fiftyUsed: 0,
                    hintsUsed: 0,
                    coinsSpent: 0,
                    coins: 100,
                    gold: 0,
                    silver: 0,
                    bronze: 0
                })

            }).then(() => {
                setSubmitting(false)
                setTimeout(() => {
                    setStatus({loading : false})
                    props.history.push('/settings')
                }, 1000)
            }).catch((error) =>{
               // alert(error)
                console.log(error)
                setSubmitting(false)
                setStatus({loading : false})
                setStatus({error: error.message})
            })
    }

})(SignUpPage)

export default FormikSignUpPage

