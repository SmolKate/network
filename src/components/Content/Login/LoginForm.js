import { Form, Field } from 'formik'
import React from 'react';
import s from '../../../common/error.module.css'


const LoginForm = ({ errors, touched, status }) => {
    
    return (
       
            <Form className={s.form}>
            <div>
                {!!status && <div className={s.errorMsg}>{status}</div>}
            </div>
            <div className={touched.email && errors.email ? s.errorMsg : ''}>
                <Field name='email' type='text' placeholder='email' />
                {touched.email && errors.email && <div className={s.errorMsg}>{errors.email}</div>}
            </div>
            <div className={touched.password && errors.password ? s.errorMsg : ''}>
                <Field name='password' type='password' placeholder={'password'} />
                {touched.password && errors.password && <div className={s.errorMsg}>{errors.password}</div>}
            </div>
                <Field name='rememberMe' type='checkbox'  />Remeber Me
                <button type='submit' >Submit</button>
            </Form>
        
    )
    
}

export default LoginForm;

