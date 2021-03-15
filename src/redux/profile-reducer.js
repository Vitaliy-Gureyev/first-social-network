const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


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
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [(newPost), ...state.posts],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);

export default profileReducer;