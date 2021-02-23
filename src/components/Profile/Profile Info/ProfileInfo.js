import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div className={classes.img}>
            <img src='https://i.ibb.co/mTfnGY3/background-crop.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            ava & description
        </div>
    </div>
}

export default ProfileInfo;