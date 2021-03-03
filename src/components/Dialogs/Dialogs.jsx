import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator, updateNewPostTextActionCreator} from "../../redux/dialogs-reducer.js";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id} id={message.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addMessage}>
                    <p>Отправить сообщение:</p>
                    <textarea onChange={onNewMessageChange} placeholder={'type your message here'} value={newMessageBody}></textarea> <br/>
                    <button onClick={onSendMessageClick}>Add Post
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;