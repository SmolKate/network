import React from "react";
import s from './UserInfo.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const UserInfo = (props) => {
    if (!props.profile) {
        return <div className={s.preloader}>
            <Preloader />
        </div>
        
    }

    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TNXpBwLvwobYsBplpRwvFGiL0iHONril4A&usqp=CAU'></img>
            <div className={s.description}>
                {props.profile.fullName}
            </div>
            <ProfileStatus userId={props.userId} userAuthId={props.userAuthId} status={props.status} updateStatus={props.updateStatus}/>
            
        </div>
    )
}

export default UserInfo;