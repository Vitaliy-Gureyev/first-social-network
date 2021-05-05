import React from 'react';
import ProfileInfo from "./Profile Info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const ProfilePage = (props) => {
    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default ProfilePage;