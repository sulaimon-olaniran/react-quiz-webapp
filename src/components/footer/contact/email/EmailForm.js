import React from 'react'
import { withFormik, Form, Field } from 'formik'


const EmailForm = () => {
    return (
        <Form className="w3-container w3-card-4  w3-text-blue w3-margin email-form-container">
            <h2 className="w3-center">Send Mail</h2>

            <div className="w3-row w3-section">
                <div className="w3-col" style={{width: "50px"}}><i className="w3-xxlarge fa fa-user"></i></div>
                <div className="w3-rest">
                    <Field type="text" className="w3-input w3-border" name="firstname" placeholder="First Name" />
                </div>
            </div>

            <div className="w3-row w3-section">
                <div className="w3-col" style={{width: "50px"}}><i className="w3-xxlarge fa fa-user"></i></div>
                <div className="w3-rest">
                    <Field type="text" className="w3-input w3-border" name="lastname" placeholder="Last Name" />
                </div>
            </div>

            <div className="w3-row w3-section">
                <div className="w3-col" style={{width: "50px"}}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                <div className="w3-rest">
                    <Field type="email" className="w3-input w3-border" name="email" placeholder="Email" />
                </div>
            </div>

            <div className="w3-row w3-section">
                <div className="w3-col" style={{width: "50px"}}><i className="w3-xxlarge fa fa-phone"></i></div>
                <div className="w3-rest">
                    <Field type="text" className="w3-input w3-border" name="phone" placeholder="Phone" />
                </div>
            </div>

            <div className="w3-row w3-section">
                <div className="w3-col" style={{width: "50px"}}><i className="w3-xxlarge fa fa-pencil"></i></div>
                <div className="w3-rest">
                    <Field className="w3-input w3-border" name="message" type="text" placeholder="Message" />
                </div>
            </div>

            <Field type="submit" value="Send Message" className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding" />

        </Form>
    )
}

const FormikEmailForm = withFormik({

    mapPropsToValues() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            message: ""
        }
    },

    handleSubmit(values) {
        console.log(values)
    }

})(EmailForm)

export default FormikEmailForm