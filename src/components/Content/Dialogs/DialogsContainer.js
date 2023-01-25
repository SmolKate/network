import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';
import { withFormik } from "formik";
  

let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage : (newMessage, chatId) => {dispatch(addMessageActionCreator(newMessage, chatId))},
        
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

