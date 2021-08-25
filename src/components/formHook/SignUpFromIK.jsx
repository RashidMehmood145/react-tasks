import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup';

export const SignUpFromIK = () => {
const validate = Yup.object({
    firstName: Yup.string()
    .max(15,'Must be 15 Characters or less')
    .required('Required'),
    lastName: Yup.string()
    .max(15,'Must be 15 Characters or less')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Required'),
    password: Yup.string()
    .min(6,'password must be at least 6 Characters')
    .required('password is Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password must match')
    .required('Required'),
})


    return (
        <div>
            <Formik 
            initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                confirmPassword:""

            }}
            validationSchema={validate}
            onSubmit = {values =>{
                console.log(values);
                   
            }}
             >
                {formik =>(
                    <div className="container ">
                        <h1 className="my-4 font-weight-bold-display-4 text-center">Sign Up</h1>
                          {/* {console.log(formik.values)} */}
                     <Form>
                        <TextField  label="First Name" name="firstName" type="text"  />
                        <TextField  label="Last Name" name="lastName" type="text"  />
                        <TextField  label="Email" name="email" type="email"  />
                        <TextField  label="Password" name="password" type="password"  />
                        <TextField  label="Confirm Password" name="confirmPassword" type="password"  />
                        <button className="btn btn-dark btn-lg mt-3 " type="submit">Submit</button>
                        <button className="btn btn-danger btn-lg mt-3 mx-3" type="reset" style={{marginLeft:'20px'}}> Reset</button>
                    </Form>
                    </div>
                )}
            </Formik>

            
        </div>
    )
}
