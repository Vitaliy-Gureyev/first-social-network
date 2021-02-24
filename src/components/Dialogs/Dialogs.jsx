import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    let newPostElement = React.createRef ();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert('yes')
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.addMessage}>
                <p>Отправить сообщение:</p>
                <textarea ref={newPostElement}></textarea> <br/>
                <button onClick={addPost}>Add Post
                </button>
            </div>
        </div>
    )
};
export default Dialogs;