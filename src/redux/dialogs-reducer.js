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
    ]
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        /*messagesData: [...state.messagesData]*/
    };

    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
            messagesData: [...state.messagesData, {id: 6, message: body}]
            }
        default:
            return state;
    }

    return state;
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogReducer;