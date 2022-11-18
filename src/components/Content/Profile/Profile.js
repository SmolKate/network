import React from "react";
import MyPosts from './MyPosts/MyPosts';
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className = {s.profile}>
            <UserInfo />
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;