import React from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { withFormik, Form, Field } from 'formik'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { db, auth } from '../../../firebase/Firebase'
import { ProfileContext } from '../../../contexts/ProfileContext'

const ProfileSettings = () => {

    return (
        <div className="profile-settings-container" >
            <h3>Profile Details</h3>
            <Form className="profile-settings-form"  >

                <Field as={TextField} type="text" name="firstName" label="First Name" color="primary" />
                <Field as={TextField} type="text" name="lastName" label="Last Name" />

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


                <Field as={TextField} type="number" name="phoneNumber" label="Phone number" />
                <Field as={TextField} type="text" name="instagram" label="Instagram" />
                <Field as={TextField} type="text" name="twitter" label="Twitter" />
                <Field as={TextField} type="text" name="facebook" label="Facebook" />


                <Field as={TextField} type="text" name="about" label="About You" />

                <Field type="submit" as={Button} variant="contained" color="primary" >Update Details</Field>
            </Form>
        </div>
    )
}


const FormikProfileSettings = withFormik({
    mapPropsToValues({ details }) {
        const { firstName, lastName } = details
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            sex: "",
            country: "",
            phoneNumber: "",
            instagram: "",
            twitter: "",
            about: "",
            facebook : ""
        }
    },

    handleSubmit(values, {props}) {
        const { sex, country, firstName, lastName, phoneNumber, instagram, twitter, about, facebook } = values
        const { details } = props
        console.log(values)
        const userId = auth.currentUser.uid

        db.collection("users").doc(userId).set({
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            country: country,
            phoneNumber: phoneNumber,
            instagram: instagram,
            twitter: twitter,
            facebook : facebook,
            about: about

        } , { merge: true } ).then(() =>{
            console.log("Profile Updated")
        })

    }

})(ProfileSettings)


export default FormikProfileSettings