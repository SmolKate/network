import React from "react";
import s from './DialogItem.module.css';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div>
            <div className={s.dialogItem}> {/*{s.dialogItem + ' ' + s[props.class]}*/}
                <div className = {s.image}>
                    <img src='https://krasivosti.pro/uploads/posts/2021-07/1625891556_49-krasivosti-pro-p-kvadratnii-kot-koti-krasivo-foto-59.jpg'></img>
                </div>
                <div className = {s.link}>
                    <Link to={path}>{props.name}</Link>
                </div>
                
            </div>
         
        </div>
    )
}

export default DialogItem;