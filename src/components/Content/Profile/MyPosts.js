import React from "react";
import s from './MyPosts.module.css'
import PostElem from "./PostElem";

const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hello!', likesCount:11},
        {id:2, message:'Good morning!', likesCount:120},
        {id:3, message:'How are you?', likesCount:6},
        {id:4, message:'Hi, guys!', likesCount:54},
    ]

    let postsElements = postsData
        .map (p => <PostElem id={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <h3>My posts</h3>
            
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;