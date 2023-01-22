import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const CHANGE_IS_AUTH_FETCHING = 'auth/CHANGE_IS_AUTH_FETCHING';
const SET_LOGOUT = 'auth/SET_LOGOUT'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setLogout = () => ({type: SET_LOGOUT})
export const changeIsAuthFetching = (isAuthFetching) => ({type: CHANGE_IS_AUTH_FETCHING, isAuthFetching})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isAuthFetching: true,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
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


export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    dispatch(changeIsAuthFetching(true))
    const data = await authAPI.login(email, password, rememberMe, captcha)
    dispatch(changeIsAuthFetching(false))
    if (data.resultCode === 0) {
        dispatch(setAuth())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
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

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await authAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
