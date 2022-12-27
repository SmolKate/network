import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const CHANGE_IS_AUTH_FETCHING = 'auth/CHANGE_IS_AUTH_FETCHING';
const SET_LOGOUT = 'auth/SET_LOGOUT'

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setLogout = () => ({type: SET_LOGOUT})
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
        case SET_LOGOUT:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
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

export const setAuth = () => async (dispatch) => {
    dispatch(changeIsAuthFetching(true))
    const data = await authAPI.getAuth();
    dispatch(changeIsAuthFetching(false));
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
    }
}


export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
    dispatch(changeIsAuthFetching(true))
    const data = await authAPI.login(email, password, rememberMe)
    dispatch(changeIsAuthFetching(false))
    if (data.resultCode === 0) {
        dispatch(setAuth())
    } else {
        setStatus(data.messages)
    }
}


export const logout = () => async (dispatch) => {
    dispatch(changeIsAuthFetching(true))
    const data = await authAPI.logout()
    dispatch(changeIsAuthFetching(false))
    if (data.resultCode === 0) {
        dispatch(setLogout())
    }
}

