import React from 'react';
import ProfileInfo from "./Profile Info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const ProfilePage = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default ProfilePage;