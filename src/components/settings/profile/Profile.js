import React from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { withFormik, Form, Field } from 'formik'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { db, auth } from '../../../firebase/Firebase'
import CircularProgress from '@material-ui/core/CircularProgress'
import * as yup from 'yup'

const ProfileSettings = ({ isSubmitting, status, errors, touched }) => {
    const displayed = isSubmitting ? <CircularProgress color="primary" /> : <h3 style={{ color: 'green' }}>Updated</h3>

    return (
        <div className="profile-settings-container" >
            <h3>Profile Details</h3>
            <Form className="profile-settings-form"  >

                <Field as={TextField} type="text" name="firstName" label="First Name" color="primary"
                    error={touched.firstName && errors.firstName ? true : false}
                    helperText={touched.firstName && errors.firstName}
                />

                <Field as={TextField} type="text" name="lastName" label="Last Name"
                    error={touched.lastName && errors.lastName ? true : false}
                    helperText={touched.lastName && errors.lastName}
                />

                <Field as={TextField} type="text" name="userName" label="Username" />

                <RadioGroup>
                    <FormLabel>
                        <Field as={Radio} type="radio" name="sex" value="Male" />
                    Male
                    </FormLabel>
                    <FormLabel>
                        <Field as={Radio} type="radio" name="sex" value="Female" />
                    Female
                    </FormLabel>

                </RadioGroup>


                <Field as={TextField} type="text" name="country" label="Country" />
                <Field as={TextField} type="text" name="state" label="State" />
                <Field as={TextField} type="number" name="phoneNumber" label="WhatsApp" />
                <Field as={TextField} type="text" name="instagram" label="Instagram" />
                <Field as={TextField} type="text" name="twitter" label="Twitter" />
                <Field as={TextField} type="text" name="facebook" label="Facebook" />
                <Field as={TextField} type="text" name="about" label="About You" />

                <h1>For payment</h1>
                 <p>Account details will not be visible to other users</p>
                 <p>Make sure Account is same as your profile names</p>
                <Field as={TextField} type="number" name="accountNumber" label="Account Number" />
                <Field as={TextField} type="text" name="bankName" label="Bank Name" />

                <Field type="submit" as={Button} variant="contained" color="primary" disabled={isSubmitting} >Update Details</Field>

                {status && status.loading && displayed}
                {status && status.error && <small style={{color : "red"}}>{status.error}</small>}
            </Form>
        </div>
    )
}


const FormikProfileSettings = withFormik({
    mapPropsToValues({ details }) {
        const { firstName, lastName, sex, phoneNumber, instagram, twitter, about, facebook, country, state, userName } = details
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            userName: userName || "",
            sex: sex || "",
            country: country || "",
            state: state || "",
            phoneNumber: phoneNumber || "",
            instagram: instagram || "",
            twitter: twitter || "",
            about: about || "",
            facebook: facebook || ""
        }
    },

    validationSchema: yup.object().shape({
        firstName: yup.string()
            .required('Enter Firstname')
            .min(2, 'min of 2 letters'),

        lastName: yup.string()
            .required('Enter Lastname')
            .min(2, 'min of 2 letters'),

        userName: yup.string()
            .required('Enter Username')
            .min(2, 'min of 2 letters')
    }),

    handleSubmit(values, { setStatus, setSubmitting, props }) {
        console.log("handle submit is working fine")
        const { sex, country, firstName, lastName, phoneNumber, instagram, twitter, about, facebook, state, userName } = values
        const { users, details } = props
        const userId = auth.currentUser.uid
        setSubmitting(true)
        setStatus({ loading: true })

        const usersNameArray = []
        users.forEach((user) => {
            const names = user.userName.toLowerCase()
            usersNameArray.push(names)

            if (usersNameArray.includes(userName.toLowerCase()) && details.userName.toLowerCase() !== userName.toLowerCase()) {
                setSubmitting(false)
                setStatus({ loading: false })
                setStatus({ error: "Username already Exists." })

            }
            else {

                db.collection("users").doc(userId).set({
                    firstName: firstName,
                    lastName: lastName,
                    name: firstName + " " + lastName,
                    userName: userName,
                    sex: sex,
                    country: country,
                    state: state,
                    phoneNumber: phoneNumber,
                    instagram: instagram,
                    twitter: twitter,
                    facebook: facebook,
                    about: about

                }, { merge: true }).then(() => {
                    setSubmitting(false)
                    setTimeout(() => {
                        setStatus({ loading: false })
                    }, 1000)
                    // console.log("Profile Updated")
                })
            }
        })

    }

})(ProfileSettings)


export default FormikProfileSettings