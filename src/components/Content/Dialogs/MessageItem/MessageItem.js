import React from "react";
import s from './MessageItem.module.css';


const MessageItem = ({name, text, userAuthId}) => {
    let className
    let nameField
    if (userAuthId) {
        className = s.messageItemMe
        nameField = "Me"
    } else {
        className = s.messageItemOther
        nameField = name
    }
    return (
        <div className={s.messages}>
            <div className={s.messageField + ' ' + className}>
                {nameField}: {text}
            </div>         
        </div>
    )
}

export default MessageItem;