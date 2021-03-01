import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.count}/>)

    let newPostElement = React.createRef ();

    let addPost = () => {
        props.dispatch (addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div className={classes.addPost}>
                <h4>My post </h4>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/> <br/>
                <button onClick={addPost}>Add Post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;