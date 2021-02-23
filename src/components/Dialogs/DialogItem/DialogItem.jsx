import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let dialogPath = "/dialogs/" + props.id
    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={dialogPath}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;