import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const mainePhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <div>
        <div className={classes.descriptionBlock}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.photos.large === null
                ? <img src='https://i.ibb.co/km2ndtc/standart-User.jpg'/>
                : <img src={props.profile.photos.large}/>}</div>
            {props.isOwner && <input type="file" className="change-photo-button" onChange={mainePhotoSelected}/>}
            <div> status: <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>Про меня: {props.profile.aboutMe}</div>
            <div>Контакты
                <div>facebook: {props.profile.contacts.facebook}</div>
                <div>website: {props.profile.contacts.website}</div>
                <div>twitter: {props.profile.contacts.twitter}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
                <div>youtube: {props.profile.contacts.youtube}</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>mainLink: {props.profile.contacts.mainLink}</div>
            </div>
            <div>
                Ищу работу {props.profile.lookingForAJob === true ? '✅' : '☒'} <br/>
                Пожелания к работе: {props.profile.lookingForAJobDescription}
            </div>
        </div>
    </div>
}

export default ProfileInfo;