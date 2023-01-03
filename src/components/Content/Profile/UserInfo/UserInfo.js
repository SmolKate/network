import React, { useState, useEffect } from "react";
import s from './UserInfo.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../../assets/userPhoto.jpeg'

const UserInfo = (props) => {
    const [fileSelected, setFileSelected]=useState(userPhoto)

    if (!props.profile) {
        return <div className={s.preloader}>
            <Preloader />
        </div>
    }

    const onFileSelecting = (e) => {
        if (!!e.target.files[0]) {
            const file = e.target.files[0]
            props.updatePhoto(file)
            console.log(fileSelected)
        }
    }


    return (
        <div>
            <img className={s.avaPhoto} src={props.profile.photos.large || userPhoto}></img>
            { !props.userId && <div >
                <input type="file" onChange={onFileSelecting}/>
            </div>}
            <div className={s.description}>
                {props.profile.fullName}
            </div>
            <ProfileStatus userId={props.userId} userAuthId={props.userAuthId} status={props.status} updateStatus={props.updateStatus}/>
            
        </div>
    )
}

export default UserInfo;