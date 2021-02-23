import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img
                src='https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511'/>
            { props.message }
            <div className={classes.like}>
                <span>  like - </span>
                {props.count}
            </div>
        </div>)
}

export default Post;