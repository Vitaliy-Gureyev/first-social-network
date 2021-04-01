import React from 'react';
import classes from './Dialogs.module.css';
import {Redirect, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
    updateNewPostTextActionCreator
} from "../../redux/dialogs-reducer.js";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                      id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id}
                                                                      id={message.id}/>)
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
};
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.addMessage} >
            <p>Отправить сообщение:</p>
            <Field component="textarea" name="newMessageBody" placeholder="type your message here"/>
            <button>Add Post
            </button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;