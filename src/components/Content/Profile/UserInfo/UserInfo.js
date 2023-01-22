import React, { useState, useEffect } from "react";
import s from './UserInfo.module.css';
import Preloader from "../../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../../assets/ava3.png';
import JobPicture from '../../../../assets/lookingForAJob.jpeg';
import ProfileDataForm from "./ProfileDataForm";
import { withFormik } from "formik";

const UserInfo = (props) => {
    const [fileSelecting, setFileSelecting]=useState(false)
    const [hoverMode, setHoverMode]=useState(false)
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
            // console.log(fileSelected)
        }
        setFileSelecting(false)
    }

    const onEditBtnClick = () => {
        setEditMode(true)
    }

    const handleMouseEnter = () => {
        setHoverMode(true)
    }

    const handleMouseLeave = () => {
        setHoverMode(false)
    }


    return (
        <div className={s.description}>
            <div className={s.avaPhoto} >
                <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={props.profile.photos.large || userPhoto}></img> 
            </div>
            <div className={s.jobPicture}>
                        {props.profile.lookingForAJob && <img src={JobPicture}/> }
            </div>
            { !props.userId && !editMode && 
            <div className={s.editBtn}>
                <button  onClick={onEditBtnClick}>Edit profile</button>
            </div>}
            { (!!hoverMode||!!fileSelecting) && !props.userId && 
                    <div className={s.changePhoto} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                        <div>Change photo</div>
                        <input type="file" onClick={()=> setFileSelecting(true) } onChange={onFileSelecting}/>
                    </div>}
            {/* <div className={s.changePhoto}>
                { !props.userId && <input type="file" onChange={onFileSelecting}/>}
            </div>    */}
                { editMode 
            ? <ProfileDataFormFormik profile={props.profile} updateProfile={props.updateProfile} setEditMode={setEditMode}/> 
            : <ProfileData profile={props.profile} userId={props.userId} 
                userAuthId={props.userAuthId} 
                status={props.status} updateStatus={props.updateStatus}/>}
                        
        </div>
    )
}

const ProfileData = (props) => {
    
    return <div className={s.profileData}>
            <div className={s.userInfo}>
                {/* { !props.userId && <button onClick={props.onEditBtnClick}>Edit profile</button>} */}
                    <div>
                        {props.profile.fullName}
                    </div>
                     <div className={s.jobPicture}>
                        {props.profile.lookingForAJob && <img src={JobPicture}/> }
                    </div>
                    <ProfileStatus userId={props.userId} userAuthId={props.userAuthId} status={props.status} updateStatus={props.updateStatus}/>
                   
                    { props.profile.lookingForAJob && 
                    <div>
                        <b>My professional skils</b>: {props.profile.lookingForAJobDescription}
                    </div>}
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
            </div>
            
            <div className={s.contacts}>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map( key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contactItem}><b>{contactTitle}</b>: {contactValue}</div>
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
        props.updateProfile(values, setStatus, props.setEditMode)
        
        
        setSubmitting(false)
    }
})(ProfileDataForm)