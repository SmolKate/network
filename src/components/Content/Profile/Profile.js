import React from "react";
import MyPosts from "./MyPosts";
import UserInfo from "./UserInfo";
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className = {s.profile}>
            <UserInfo />
            <MyPosts />
        </div>
    )
}
export default Profile;