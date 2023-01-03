import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS'


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO_SUCCESS, photos})


let initialState = {
    postsData: [
        {id:1, message:'Hello!', likesCount:11},
        {id:2, message:'Good morning!', likesCount:120},
        {id:3, message:'How are you?', likesCount:6},
        {id:4, message:'Hi, guys!', likesCount:54},
    ],
    newPostText: 'ttt',
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
                newPostText: ''
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

        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        
        default:
            return state;

    }
}

export default profileReducer;

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setProfile(data))    
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const updatePhoto = (file) => async (dispatch) => {
    const data = await profileAPI.getFollowedUsers(file)
    if (data.resultCode === 0) {
        dispatch(updatePhotoSuccess(data.data.photos))
    }
}
