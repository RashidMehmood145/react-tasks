import {ErrorMessage, useField } from 'formik'
import React from 'react';


export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    // console.log(props);
    return (
        <div className="mb-3">
            <label htmtFor={field.name} style={{fontSize:'20px' }} className="ont-weight-bold" > {label} </label>    
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}` }
            {...field} {...props}
               autoComplete="off"
             />  
             <ErrorMessage component="div" name={field.name} style={{fontSize:'17px', color:'red'}}/>    
        </div>
    )
}
