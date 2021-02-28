import React from 'react';
import classes from './Profilepage.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./Profile Info/ProfileInfo";


const Profilepage = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profilepage;