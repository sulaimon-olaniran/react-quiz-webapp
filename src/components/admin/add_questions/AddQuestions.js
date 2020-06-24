import React from 'react'
import { withFormik, Form, Field, FieldArray } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { db } from '../../../firebase/Firebase'


const AddQuestions = ({ values, isSubmitting }) => {
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
                                                <Field as={TextField} type="text" name={`questions.${index}`} placeholder="Question" />
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
                                                <Field as={TextField} type="text" name={`options.${index}`} placeholder="Option" />
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
                                                <Field as={TextField} type="text" name={`answers.${index}`} placeholder="Answer" />
                                                <Button onClick={() => arrayHelpers.remove(index)} size="large" color="secondary">X</Button>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </FieldArray>

                <Field type="submit" as={Button} variant="contained" color="secondary" disabled={isSubmitting} >Submit Question</Field>

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

    handleSubmit(values, { resetForm, setSubmitting }) {
        console.log(values)
        db.collection('questions')
            .add({
                questions : values.questions,
                options : values.options,
                answers : values.answers
            })
            .then(() =>{
                alert("upload successful")
                setSubmitting(false)
                resetForm()
            })
            .catch(error => console.log(error))
    }

})(AddQuestions)

export default FormikAddQuestions