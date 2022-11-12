import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData
        .map (d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.state.messagesData
        .map (m => <MessageItem message={m.message} name={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
               {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;