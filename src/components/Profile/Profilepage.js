import React from 'react';
import classes from './Profilepage.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./Profile Info/ProfileInfo";


const Profilepage = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profilepage;