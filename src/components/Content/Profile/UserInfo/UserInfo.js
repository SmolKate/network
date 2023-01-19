import React, { useState, useEffect } from "react";
import s from './UserInfo.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../../assets/userPhoto.jpeg';
import ProfileDataForm from "./ProfileDataForm";
import { withFormik } from "formik";

const UserInfo = (props) => {
    const [fileSelected, setFileSelected]=useState(userPhoto)
    const [editMode, setEditMode]=useState(false)

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

    const onEditBtnClick = () => {
        setEditMode(true)
    }


    return (
        <div className={s.description}>
            <img className={s.avaPhoto} src={props.profile.photos.large || userPhoto}></img>
            { !props.userId && <input type="file" onChange={onFileSelecting}/>}
            { editMode 
            ? <ProfileDataFormFormik profile={props.profile} updateProfile={props.updateProfile} setEditMode={setEditMode}/> 
            : <ProfileData profile={props.profile} userId={props.userId} 
                onEditBtnClick={onEditBtnClick} userAuthId={props.userAuthId} 
                status={props.status} updateStatus={props.updateStatus}/>}
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
            { !props.userId && <button onClick={props.onEditBtnClick}>Edit profile</button>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <ProfileStatus userId={props.userId} userAuthId={props.userAuthId} status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes": "no"}
            </div>
            { props.profile.lookingForAJob && 
            <div>
                <b>My professional skils</b>: {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map( key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}
export default UserInfo;

const ProfileDataFormFormik = withFormik ({
    mapPropsToValues ({profile}) {
        return {
            fullName: profile.fullName || '',
            lookingForAJob: profile.lookingForAJob || false,
            lookingForAJobDescription: profile.lookingForAJobDescription || '',
            aboutMe: profile.aboutMe || '',
            contacts: {
                facebook: profile.contacts.facebook || '',
                website: profile.contacts.website || '',
                vk: profile.contacts.vk || '',
                twitter: profile.contacts.twitter || '',
                istagram: profile.contacts.istagram || '',
                youtube: profile.contacts.youtube || '',
                github: profile.contacts.github || '',
                mainLink: profile.contacts.mainLink || '',
            }
            
        }
    },

    handleSubmit (values, {props, setStatus, setSubmitting, ...actions}) {
        // setStatus('error')
        // props.setEditMode(false)
        
        debugger
        props.updateProfile(values, setStatus, props.setEditMode)
        
        
        setSubmitting(false)
    }
})(ProfileDataForm)