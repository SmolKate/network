import React from "react";
import s from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {
    let friendsItem = props.friendsData
        .map (p => <FriendsItem name={p.name} />)

   
    return (
        <div className={s.friendsComp}>
            <h2>Friends</h2>
            <div className={s.friendsField}>
                {friendsItem}
            </div>         
        </div>
    )
}

export default Friends;