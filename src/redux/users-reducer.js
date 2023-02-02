import { usersAPI } from "../api/api";
import { getFollowedUsers } from "./friends-reducer";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const SET_PAGE_NUMBER = 'users/SET_PAGE_NUMBER';
const CHANGE_IS_FETCHING = 'users/CHANGE_IS_FETCHING';
const CHANGE_IS_FOLLOWING_PROGRESS= 'users/CHANGE_IS_FOLLOWING_PROGRESS'

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersData) => ({type: SET_USERS, usersData});
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const changeIsFetching = (isFetching) => ({type: CHANGE_IS_FETCHING, isFetching})

// if isFetching is true - add the user to the isFollowingInProgress list; 
// if isFetching is false - delet the user from the isFollowingInProgress list;
export const changeIsFollowingInProgress = (isFetching, userId) => ({type: CHANGE_IS_FOLLOWING_PROGRESS, isFetching, userId})

let initialState = {
    usersData: [],
    totalUsersCount: 40,
    pageSize: 10,
    pageNumber: 1,
    isFetching: true,
    isFollowingInProgress: [] // array what contains all users with follow/unfollow process in progress

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

// Get a portion of users from the server and save data
export const getUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(changeIsFetching(true))
    const data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(changeIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
}

// Set the user as followed and put this to the server
export const follow = (userId) => async (dispatch) => {
    dispatch(changeIsFollowingInProgress(true, userId));
    const data = await usersAPI.setFolow(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    };
    dispatch(changeIsFollowingInProgress(false, userId));
    dispatch(getFollowedUsers())
}

// Set the user as unfollowed and put this to the server
export const unfollow = (userId) => async (dispatch) => {
    dispatch(changeIsFollowingInProgress(true, userId));
    const data = await usersAPI.setUnfolow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    };
    dispatch(changeIsFollowingInProgress(false, userId));
    dispatch(getFollowedUsers())
}

