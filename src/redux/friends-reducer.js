import { usersAPI } from "../api/api";

const GET_FOLLOWED_USERS_DATA = 'friends/GET_FOLLOWED_USERS_DATA';
const SET_TOTAL_COUNT = 'friends/SET_TOTAL_COUNT';
const SET_PAGE_NUMBER = 'friends/SET_PAGE_NUMBER';

export const getFollowedUsersData = (followedUsersData) => ({type: GET_FOLLOWED_USERS_DATA, followedUsersData})
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})

let initialState = {
    friendsData: [],
    totalUsersCount: 0,
    pageSize: 6,
    pageNumber: 1,
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOLLOWED_USERS_DATA:
            return {
                ...state,
                friendsData: action.followedUsersData,
            };

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
    
        default:
            return state;
    }
}

export default friendsReducer;

// Get the list of followed friends of the authorised user and handle the response
export const getFollowedUsers = (pageNumber, pageSize) => async (dispatch) => {
    const data = await usersAPI.getFollowedUsers(pageNumber, pageSize)
    dispatch(getFollowedUsersData(data.items))
    dispatch(setTotalCount(data.totalCount))
}