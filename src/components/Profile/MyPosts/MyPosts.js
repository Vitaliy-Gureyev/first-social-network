import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} count={post.count}/>)

    let newPostElement = React.createRef ();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={classes.addPost}>
                <h4>My post </h4>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder={'type your text here'} value={props.newPostText}/> <br/>
                <button onClick={onAddPost}>Add Post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;