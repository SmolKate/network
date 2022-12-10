import React from "react";
import s from './UserInfo.module.css';

const ProfileStatus = (props) => {
  

    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TNXpBwLvwobYsBplpRwvFGiL0iHONril4A&usqp=CAU'></img>
            <div className={s.description}>
                {props.profile.fullName}
            </div>
            
            
        </div>
    )
}

export default ProfileStatus;