import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import s from './FriendsItem.module.css';


const FriendsItem = (props) => {
   
    return (
        <div className={s.item}>
            <div className = {s.image}>
                <img src='https://krasivosti.pro/uploads/posts/2021-07/1625891556_49-krasivosti-pro-p-kvadratnii-kot-koti-krasivo-foto-59.jpg'></img>
            </div>
            <div className={s.name}>
                {props.name}
            </div>         
        </div>
    )
}

export default FriendsItem;