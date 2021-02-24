import {rerenderEntireTree} from "../render";


let state = {
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
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        count: 0
    };
    state.profilePage.posts.unshift (newPost);
    rerenderEntireTree(state);
};

export default state