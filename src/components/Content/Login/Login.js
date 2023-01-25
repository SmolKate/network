import React from 'react'
import LoginForm from './LoginForm';
import { withFormik } from 'formik';
import * as Yup from 'yup'; 
import { connect } from 'react-redux';
import { login, } from '../../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import s from './Login.module.css';
import backPhoto from '../../../assets/forest.jpeg';

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

const Login = (props) => {
    
    return (
        <div>
        {/* <img src={backPhoto}/> */}
        {props.isAuth && <Navigate to={"/profile"}/>}
            <div className={s.loginBox}>
                <h1>Log in</h1>
                <LoginFormFormik login={props.login} captchaUrl={props.captchaUrl}/>
            </div>    
        </div>
    )
    
}

export default connect(mapStateToProps, {login})(Login);

const LoginFormFormik = withFormik ({
    mapPropsToValues ({email, password, rememberMe, captcha}) {
        return {
            email: email || '',
            password: password || '',
            rememberMe: rememberMe || false,
            captcha: captcha || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().max(20, 'Max length is 20 simbols.').required('Required'),
        password: Yup.string().max(10, 'Max length is 10 simbols.').required('Required'),
    }),
    handleSubmit (values, {props, setStatus, setSubmitting, ...actions}) {
        props.login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
        setSubmitting(false);       
        
    }
})(LoginForm)

