import React from "react";
import s from './MyPosts.module.css';
import PostElem from './PostElem/PostElem';
import { withFormik } from "formik";
import NewPostForm from "./PostElem/NewPostForm";
import * as Yup from 'yup';


const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData
        .map (p => <PostElem key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <h3>My posts</h3>
            <NewPostFormFormik onAddPost={props.addPost}/>
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;

const NewPostFormFormik = withFormik({
    mapPropsToValues: ({newPost}) => ({
            newPost: newPost || ''
    }), 
    validationSchema: Yup.object().shape({
        newPost: Yup.string().max(10, 'Max length is 10 simbols.').required('')
    }),
    handleSubmit: (values, {props: {onAddPost}, setSubmitting}) => {
        onAddPost(values.newPost)
        values.newPost = ''
        setSubmitting(false)
        
    },

    // handleSubmit: (values, actions) => {
    //     actions.props.onAddPost(values.newPost)
    //     values.newPost = ''
    //     actions.setSubmitting(false)
    // }
})(NewPostForm)