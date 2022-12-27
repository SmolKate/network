import React from 'react'
import LoginForm from './LoginForm';
import { withFormik } from 'formik';
import * as Yup from 'yup'; 
import { connect } from 'react-redux';
import { login } from '../../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

const Login = (props) => {
    
    return (
        <div>
        {props.isAuth && <Navigate to={"/profile"}/>}
            <h1>Login</h1>
            <LoginFormFormik login={props.login}/>
        </div>
    )
    
}

export default connect(mapStateToProps, {login})(Login);

const LoginFormFormik = withFormik ({
    mapPropsToValues ({email, password, rememberMe}) {
        return {
            email: email || '',
            password: password || '',
            rememberMe: rememberMe || false
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().max(20, 'Max length is 20 simbols.').required('Required'),
        password: Yup.string().max(10, 'Max length is 10 simbols.').required('Required'),
    }),
    handleSubmit (values, {props, setStatus, setSubmitting, ...actions}) {
        props.login(values.email, values.password, values.rememberMe, setStatus)
        setSubmitting(false);       
        
    }
})(LoginForm)

