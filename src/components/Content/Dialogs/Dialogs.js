import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageForm from "./NewMessageForm";
import { withFormik } from "formik";
import * as Yup from 'yup'; 


const Dialogs = ({dialogsPage, onAddMessage}) => {
    
    let dialogElements = dialogsPage.dialogsData
        .map (d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = dialogsPage.messagesData
        .map (m => <MessageItem key={m.id} message={m.message} name={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
               {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <DialogsFormFormik onAddMessage={onAddMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;

export const DialogsFormFormik = withFormik({
    
    mapPropsToValues ({newMessage}) {
        return {
            newMessage: newMessage || ''
        }
    }, 
    validationSchema: Yup.object().shape({
        newMessage: Yup.string().max(20, 'Max length is 20 simbols.').required('')
    }),
    handleSubmit (values, {...actions}) {
        actions.props.onAddMessage(values.newMessage)
        values.newMessage = ''
    }
})(NewMessageForm)
