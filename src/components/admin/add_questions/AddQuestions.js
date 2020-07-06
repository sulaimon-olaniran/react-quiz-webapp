import React from 'react'
import { withFormik, Form, Field, FieldArray } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { db } from '../../../firebase/Firebase'
import * as yup from 'yup'


const AddQuestions = ({ values, isSubmitting, errors, touched }) => {

    return (
        <Form>
            <FieldArray name="questions" >
                {
                    (arrayHelpers) => (
                        <div className="field-container" >
                            <Button onClick={() => arrayHelpers.push('')} variant="contained" color="primary" size="small" >
                                Add Question(s)
                                </Button>
                            {
                                values.questions.map((question, index) => {
                                    return (
                                        <div key={index} >
                                            <Field as={TextField} type="text" name={`questions.${index}`} placeholder="Question"
                                                error={touched.questions && errors.questions ? true : false}
                                                helperText={touched.questions ? errors.questions && errors.questions[0] : null}

                                            />

                                            <Button onClick={() => arrayHelpers.remove(index)} size="large" color="secondary">X</Button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                }
            </FieldArray>
            <FieldArray name="options" >
                {
                    (arrayHelpers) => (
                        <div className="field-container" >
                            <Button onClick={() => arrayHelpers.push('')} variant="contained" color="primary" size="small" >
                                Add Option(s)
                                </Button>
                            {
                                values.options.map((option, index) => {
                                    return (
                                        <div key={index} >
                                            <Field as={TextField} type="text" name={`options.${index}`} placeholder="Option"
                                                error={touched.options && errors.options ? true : false}
                                                helperText={touched.options ? errors.options && errors.options[0] : null}
                                            />
                                            <Button onClick={() => arrayHelpers.remove(index)} size="large" color="secondary">X</Button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                }
            </FieldArray>

            <FieldArray name="answers" >
                {
                    (arrayHelpers) => (
                        <div className="field-container" >
                            <Button onClick={() => arrayHelpers.push('')} variant="contained" color="primary" size="small" >
                                Add Answer(s)
                                </Button>
                            {
                                values.answers.map((question, index) => {
                                    return (
                                        <div key={index} >
                                            <Field as={TextField} type="text" name={`answers.${index}`} placeholder="Answer"
                                                error={touched.answers && errors.answers ? true : false}
                                                helperText={touched.answers ? errors.answers && errors.answers[0] : null}
                                            />
                                            <Button onClick={() => arrayHelpers.remove(index)} size="large" color="secondary">X</Button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                }
            </FieldArray>

            <Field type="submit" as={Button} variant="contained" color="secondary" id="button" disabled={isSubmitting}>Submit Question</Field>

        </Form>
    )
}


const FormikAddQuestions = withFormik({
    mapPropsToValues() {
        return {
            questions: [""],
            options: [""],
            answers: [""]
        }
    },

    validationSchema: yup.object().shape({

        questions: yup.array()
            .of(yup.string().required("Input question"))
            .required("Question is a required field")
            .min(1),

        options: yup.array()
            .of(yup.string().required("Input Option"))
            .required("Question is a required field")
            .min(3),

        answers: yup.array()
            .of(yup.string().required("Input answer"))
            .required("Question is a required field")
            .min(1)
    }),

    handleSubmit(values, { resetForm, setSubmitting }) {
        console.log(values)
        db.collection('questions')
        .add({
            questions: values.questions,
            options: values.options,
            answers: values.answers
        })
        .then(() => {
            alert("upload successful")
            setSubmitting(false)
            resetForm()
        })
        .catch(error => console.log(error))
    }

})(AddQuestions)

export default FormikAddQuestions