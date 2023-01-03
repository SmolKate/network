import React from "react";
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";


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
    
    if (!userId && !props.isAuth) return <Navigate to={"/login"} />

    return (
        <div className = {s.profile}>
            <UserInfo profile={props.profile} userId={userId} 
            userAuthId={props.userAuthId} status={props.status} 
            updateStatus={props.updateStatus} updatePhoto={props.updatePhoto}
            />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;