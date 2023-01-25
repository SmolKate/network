import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageForm from "./NewMessageForm";
import { withFormik } from "formik";
import * as Yup from 'yup'; 
import { useParams } from "react-router-dom";


const Dialogs = ({dialogsPage, onAddMessage}) => {
    const {chatId} = useParams()

    let messages
    let name
    if (!!chatId) {
        let userChat = dialogsPage.dialogsData.filter( i => i.id.toString() === chatId)
        messages = userChat[0].messages
        name = userChat[0].name
    }

    let dialogElements = dialogsPage.dialogsData
        .map (d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    let messageElements 
    if (!!chatId) {
        messageElements = messages.map(m => <MessageItem key={m.id} text={m.text} userAuthId={m.userAuthId} name={name}/>)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
               {dialogElements}
            </div>
            <div className={s.messagesSection}>
                { !!chatId && <div>
                    {messageElements}
                    {/* <Messages messages={messages} name={name}/> */}
                    <DialogsFormFormik onAddMessage={onAddMessage} chatId={chatId}/>
                </div>}
            </div>
        </div>
    )
}
export default Dialogs;

const Messages = ({messages, name}) => {

    let messageElements = messages.map(m => <MessageItem key={m.id} text={m.text} userAuthId={m.userAuthId} name={name}/>)
    
    return (
        <div>
            {messageElements}
        </div>
    )

}

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
        actions.props.onAddMessage(values.newMessage, actions.props.chatId)
        values.newMessage = ''
    }
})(NewMessageForm)
