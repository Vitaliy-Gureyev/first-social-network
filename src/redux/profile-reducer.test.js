import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, message: 'Hello', count: 12},
        {id: 2, message: 'How are you', count: 11},
        {id: 3, message: 'Life is great', count: 0},
        {id: 4, message: 'Sun shine', count: 5},
        {id: 5, message: 'Yo', count: 12},
        {id: 6, message: 'Wats up', count: 12},
        {id: 7, message: 'Kiks', count: 12},
    ]
};

test('post count should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator("test text")

    //2. action
    let newState =profileReducer(state, action)

    //3. expectation
    expect( newState.posts.length).toBe(8);
});

test('message of new post should be correct', () => {
    // 1.test data
    let action = addPostActionCreator("test text")

    //2. action
    let newState =profileReducer(state, action)

    //3. expectation
    expect( newState.posts[7].message).toBe("test text");
});

test('after deleting length of messages should be decremented', () => {
    // 1.test data
    let action = deletePost(1)

    //2. action
    let newState =profileReducer(state, action)

    //3. expectation
    expect( newState.posts.length).toBe(6);
});