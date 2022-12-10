import React from 'react';
import { connect } from "react-redux";
import Header from '../Header/Header';
import {setAuth} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
   
    componentDidMount () {
        debugger
        this.props.setAuth()
    }

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderContainer)
