import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export const setProfile = (profile) => ({type: SET_PROFILE, profile})

let initialState = {
    postsData: [
        {id:1, message:'Hello!', likesCount:11},
        {id:2, message:'Good morning!', likesCount:120},
        {id:3, message:'How are you?', likesCount:6},
        {id:4, message:'Hi, guys!', likesCount:54},
    ],
    newPostText: 'ttt',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        
        case UPDATE_NEW_POST_TEXT:
            
            stateCopy.newPostText = action.newText;
            return stateCopy = {
                ...state,
                newPostText: action.newText,
            };

        case SET_PROFILE:
        
            return {
                ...state,
                profile: action.profile,
            };
        
        default:
            return state;

    }
}

export default profileReducer;

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then( data => {
            dispatch(setProfile(data))
        })
    }
}