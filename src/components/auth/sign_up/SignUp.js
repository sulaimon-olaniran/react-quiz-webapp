import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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

    if (status) return <Loader loading={isSubmitting} message={message} />
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

    handleSubmit(values, { props, setSubmitting, setStatus }) {
        const { email, password, firstName, lastName } = values
        console.log(values)
        setSubmitting(true)
        setStatus(true)
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
                    displayImage: "",
                    coverImage: "",
                    phoneNumber: "",
                    instagram: "",
                    twitter: "",
                    facebook: "",
                    about: "",
                    totalPoints: 0,
                    leaguePosition: null,
                    attempts: 0,
                    rightAnswers: 0,
                    wrongAnswers: 0,
                    successPercentage: 0,
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
                    props.history.push('/settings')
                }, 1000)
            })
    }

})(SignUpPage)

export default FormikSignUpPage

