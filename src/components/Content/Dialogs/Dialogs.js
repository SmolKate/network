import React from "react";
import s from './Dialogs.module.css';
import { Link } from 'react-router-dom';

let dialogsData = [
    {id:1, name:'Dima'},
    {id:2, name:'Kate'},
    {id:3, name:'Kate'}
]

let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'Hello'},
    {id:3, message:'Chears'}
]

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div>
            <div className={s.dialogItem + ' ' + s[props.class]}>
                <Link to={path}>{props.name}</Link>
            </div>
         
        </div>
    )
}

const MessageItem = (props) => {
    
    return (
        <div>
            <div className={s.messageItem}>
                {props.message}
            </div>         
        </div>
    )
}


let dialogElements = dialogsData
    .map (d => <DialogItem name={d.name} id={d.id}/>)

let messageElements = messagesData
    .map (m => <MessageItem message={m.message} />)

const Dialogs = () => {
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