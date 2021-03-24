import React from 'react';
import ProfileInfo from "./Profile Info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const ProfilePage = (props) => {
    if (props.isAuth == false) return <Redirect to={"/login"}/>;
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default ProfilePage;