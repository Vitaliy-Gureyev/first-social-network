import React from 'react';
import classes from './Profilepage.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./Profile Info/ProfileInfo";


const Profilepage = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
}

export default Profilepage;