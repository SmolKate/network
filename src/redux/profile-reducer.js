import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

let initialState = {
    postsData: [
        {id:1, message:'Hello!', likesCount:11},
        {id:2, message:'Good morning!', likesCount:120},
        {id:3, message:'How are you?', likesCount:6},
        {id:4, message:'Hi, guys!', likesCount:54},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        
        default:
            return state;
    }
}

export default profileReducer;

// Get user's profile data and save it in the state
export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))    
}

// Get user's status and save it in the state
export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

// Set new status of the authorised user and get it back from the server
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

// Set new avatar of the authorised user and get it back from the server
export const updatePhoto = (file) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.updatePhoto(file)
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    }
}

// Set new profile data of the authorised user and get it back from the server
export const updateProfile = (profile, setStatus, setEditMode) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.updateProfile(profile)
    if (data.resultCode === 0) {
        setEditMode(false)
        dispatch(getProfile(userId))
    } else {
        setStatus(data.messages)
    }
}
