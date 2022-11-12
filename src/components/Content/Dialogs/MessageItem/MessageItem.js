import React from "react";
import s from './MessageItem.module.css';


const MessageItem = (props) => {
    let className;
    if (props.name == 'me') {
        className = s.messageItemMe
    } else {
        className = s.messageItemOther
    }
    return (
        <div>
            <div className={className}>
                {props.name}: {props.message}
            </div>         
        </div>
    )
}

export default MessageItem;