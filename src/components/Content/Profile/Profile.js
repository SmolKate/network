import React from "react";
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";


const Profile = (props) => {
    const location = useLocation();
    const {userId} = useParams();
    let {isAuthFetching, getProfile, getStatus, userAuthId} = props
    
    useEffect(() => { 
        if (isAuthFetching === false) {
            if (!userId) {
                getProfile(userAuthId)
                getStatus(userAuthId)
            } else {
                getProfile(userId)
                getStatus(userId)
            }
            
        }}, [isAuthFetching, getProfile, getStatus, userAuthId, userId, location.pathname]);
    
    
    return (
        <div className = {s.profile}>
            <UserInfo profile={props.profile} userId={userId} userAuthId={props.userAuthId} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;