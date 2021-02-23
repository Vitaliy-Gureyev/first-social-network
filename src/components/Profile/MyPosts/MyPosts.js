import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} count={post.count}/>)
    return (
        <div>
            <div className={classes.addPost}>
                <h4>My post </h4>
                <textarea></textarea> <br/>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;