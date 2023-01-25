import React from "react";
import s from './PostElem.module.css'
import Like from '../../../../../assets/like.png'

const PostElem = (props) => {
    return (
        <div className = {s.item}>
            {/* <div className = {s.image}>
                <img src='https://krasivosti.pro/uploads/posts/2021-07/1625891556_49-krasivosti-pro-p-kvadratnii-kot-koti-krasivo-foto-59.jpg'></img>
            </div> */}
            <div className = {s.likesCount}>
                <img src={Like}/>
                {props.likesCount}
            </div>
            <div className = {s.likeBtn}><button>Like</button></div>
            <div className = {s.postText}>
                <div><b>Post #{props.id}</b></div>
                <div>{props.message}</div> 
            </div>
        </div>  
    )
}
export default PostElem;