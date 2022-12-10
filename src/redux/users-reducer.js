import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING';
const CHANGE_IS_FOLLOWING_PROGRESS= 'CHANGE_IS_FOLLOWING_PROGRESS'

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const changeIsFetching = (isFetching) => ({type: CHANGE_IS_FETCHING, isFetching})
export const changeIsFollowingInProgress = (isFetching, userId) => ({type: CHANGE_IS_FOLLOWING_PROGRESS, isFetching, userId})

let initialState = {
    usersData: [
   //     {id:1, followed:true, name:'Dmitry', status:'I am so pretty', location: {country:'Belarus', city:'Minsk'}, photoURL: 'https://w7.pngwing.com/pngs/338/745/png-transparent-unicorn-emoji-pegasus-drawing-unicorn-horse-purple-fictional-character.png'},
    //    {id:2, followed:true, name:'Nike', status:'I am here', location: {country:'USA', city:'New York'}, photoURL: 'https://w7.pngwing.com/pngs/338/745/png-transparent-unicorn-emoji-pegasus-drawing-unicorn-horse-purple-fictional-character.png'},
   //     {id:3, followed:false, name:'Alex', status:'Hi, everybody', location: {country:'Canada', city:'Toronto'}, photoURL: 'https://w7.pngwing.com/pngs/338/745/png-transparent-unicorn-emoji-pegasus-drawing-unicorn-horse-purple-fictional-character.png'},
   //     {id:4, followed:true, name:'Kate', status:'Ho-ho-ho', location: {country:'UK', city:'London'}, photoURL: 'https://w7.pngwing.com/pngs/338/745/png-transparent-unicorn-emoji-pegasus-drawing-unicorn-horse-purple-fictional-character.png'},
    ],
    totalUsersCount: 40,
    pageSize: 10,
    pageNumber: 1,
    isFetching: true,
    isFollowingInProgress: []

};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                usersData: state.usersData.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state, 
                usersData: state.usersData.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.usersData
            }

        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case CHANGE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CHANGE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching 
                ? [...state.isFollowingInProgress, action.userId]
                : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        
        default:
            return state;

    }
}

export default usersReducer;

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(changeIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize).then( data => {
            dispatch(changeIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(changeIsFollowingInProgress(true, userId));
        usersAPI.setFolow(userId).then( data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            };
            dispatch(changeIsFollowingInProgress(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(changeIsFollowingInProgress(true, userId));
        usersAPI.setUnfolow(userId).then( data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            };
            dispatch(changeIsFollowingInProgress(false, userId));
        })
    }
}
