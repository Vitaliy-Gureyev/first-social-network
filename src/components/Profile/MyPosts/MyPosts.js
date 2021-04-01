import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/Validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} count={post.count}/>)

    let newPostElement = React.createRef ();


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={classes.addPost}>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)

}

const maxLength10 = maxLengthCreator (10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.addMessage} >
            <Field component={Textarea} name="newPostText" placeholder="type your text here" validate={[requiredField, maxLength10]}/>
            <button>Add Post
            </button>
        </form>
    )
}
const AddPostFormRedux = reduxForm ({form:"ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;