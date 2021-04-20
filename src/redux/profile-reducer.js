import {profilePageAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hello', count: 12},
        {id: 2, message: 'How are you', count: 11},
        {id: 3, message: 'Life is great', count: 0},
        {id: 4, message: 'Sun shine', count: 5},
        {id: 5, message: 'Yo', count: 12},
        {id: 6, message: 'Wats up', count: 12},
        {id: 7, message: 'Kiks', count: 12},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [(newPost), ...state.posts],
                newPostText: ''
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfilePage = (userId) => {
    return async (dispatch) => {
        let response = await profilePageAPI.getProfilePage(userId)

        dispatch(setUserProfile(response.data));
    };
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profilePageAPI.getStatus(userId)

        dispatch(setStatus(response.data));
    };
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profilePageAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };
}

export default profileReducer;