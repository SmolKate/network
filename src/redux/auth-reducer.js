import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const CHANGE_IS_AUTH_FETCHING = 'CHANGE_IS_AUTH_FETCHING';

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const changeIsAuthFetching = (isAuthFetching) => ({type: CHANGE_IS_AUTH_FETCHING, isAuthFetching})

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isAuthFetching: true,
};

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case CHANGE_IS_AUTH_FETCHING:
            return {
                ...state,
                isAuthFetching: action.isAuthFetching
            }
        default:
            return state;

    }
}

export default authReducer;

export const setAuth = () => {
    return (dispatch) => {
        dispatch(changeIsAuthFetching(true))
        authAPI.getAuth().then( data => {
            
            dispatch(changeIsAuthFetching(false))
            if (data.resultCode === 0) {
                debugger
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}
