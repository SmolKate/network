import React from "react";
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";


const Profile = (props) => {
    const location = useLocation();
    const {userId} = useParams();
     
    
    useEffect(() => { 
        debugger
        if (props.isAuthFetching === false) {
            debugger
            if (!userId) {
                debugger
                props.getProfile(props.userAuthId)
            } else {
                debugger
                props.getProfile(userId)
            }
            
        }}, [props.isAuthFetching, location.pathname]);
    console.log(props)   
    
    return (
        <div className = {s.profile}>
            <UserInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;