import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {
    
    let dialogElements = props.dialogsPage.dialogsData
        .map (d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.dialogsPage.messagesData
        .map (m => <MessageItem message={m.message} name={m.name}/>)

    let newMessageElement = React.createRef();
    
    let onAddMessage = () => {
        props.onAddMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
        
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
               {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div autoFocus>
                        <textarea  ref = {newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send Answer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;