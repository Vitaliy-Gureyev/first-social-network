import React from 'react';
import classes from './Profilepage.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./Profile Info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profilepage = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}

export default Profilepage;