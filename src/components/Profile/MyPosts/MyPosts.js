import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.count}/>)

    let newPostElement = React.createRef ();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost (text)
        newPostElement.current.value='';
    }

    return (
        <div>
            <div className={classes.addPost}>
                <h4>My post </h4>
                <textarea ref={newPostElement}></textarea> <br/>
                <button onClick={addPost}>Add Post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;