import React from "react";
import s from './MessageItem.module.css';


const MessageItem = ({name, message}) => {
    let className;
    if (name === 'me') {
        className = s.messageItemMe
    } else {
        className = s.messageItemOther
    }
    return (
        <div>
            <div className={className}>
                {name}: {message}
            </div>         
        </div>
    )
}

export default MessageItem;