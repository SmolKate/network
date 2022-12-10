import React from "react";
import s from './MyPosts.module.css';
import PostElem from './PostElem/PostElem';
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";


const MyPosts = (props) => {
    

    let newPostElement = React.createRef();

    let postsElements = props.profilePage.postsData
        .map (p => <PostElem id={p.id} message={p.message} likesCount={p.likesCount} />)

    let onAddPost = () => {
        props.addPost();
    } 

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            
            <div>
                <div>
                    <textarea ref = {newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;