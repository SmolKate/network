import React from "react";
import MyPosts from "./MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className = {s.content}>
            
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TNXpBwLvwobYsBplpRwvFGiL0iHONril4A&usqp=CAU'></img>
            
            <div>
                ava+descripiton
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;