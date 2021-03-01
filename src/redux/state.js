import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', count: 12},
                {id: 2, message: 'How are you', count: 11},
                {id: 3, message: 'Life is great', count: 0},
                {id: 4, message: 'Sun shine', count: 5},
                {id: 5, message: 'Yo', count: 12},
                {id: 6, message: 'Wats up', count: 12},
                {id: 7, message: 'Kiks', count: 12},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}




export default store;
window.store = store;