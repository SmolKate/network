import React from "react";
import s from './MyPosts.module.css'
import PostElem from './PostElem/PostElem';

const MyPosts = (props) => {

    let postsElements = props.postsData
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