import React from "react";
import s from './PostElem.module.css'

const PostElem = (props) => {
    return (
        <div className = {s.item}>
            <div className = {s.image}>
                <img src='https://krasivosti.pro/uploads/posts/2021-07/1625891556_49-krasivosti-pro-p-kvadratnii-kot-koti-krasivo-foto-59.jpg'></img>
            </div>
            <div className = {s.post}>
                Post #{props.num}
                {props.message}
                <div>
                    <button>Like</button>
                </div>
            </div>
        </div>  
    )
}
export default PostElem;