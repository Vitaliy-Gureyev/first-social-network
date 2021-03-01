const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Life is great'},
        {id: '4', message: 'Sun shine'},
        {id: '5', message: 'Я хочу выпить'},
        {id: '6', message: 'Куда пойдем?'},
        {id: '7', message: 'Кикс'}
    ],
        dialogsData: [
        {id: '1', name: 'Vitalik'},
        {id: '2', name: 'Yana'},
        {id: '3', name: 'Anya'},
        {id: '4', name: 'Kolya'},
        {id: '5', name: 'Nastya'},
        {id: '6', name: 'Marina'},
        {id: '7', name: 'VitalikR'},
    ],
        newMessageBody: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            break;
        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: text}
);

export default dialogReducer;