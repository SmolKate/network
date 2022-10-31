import React from "react";
import s from './MyPosts.module.css'
import PostElem from "./PostElem";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className = {s.posts}>
                    <PostElem num="1" message="Hello!"/>
                    <PostElem num="2" message="Good morning!"/>
                    <PostElem num="3" message="How are you?"/>
                    <PostElem num="4" message="Hi, guys!"/>
                </div>
            </div>
        </div>
        
    )
}
export default MyPosts;