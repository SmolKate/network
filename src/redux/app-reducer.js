import { setAuth } from "./auth-reducer";

const SET_INITIALISED_SUCCESS = 'app/SET_INITIALISED_SUCCESS';

export const setInitialisedSuccess = () => ({type: SET_INITIALISED_SUCCESS})

let initialState = {
    isInitialised: false
};

const appReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_INITIALISED_SUCCESS:
            return {
                ...state,
                isInitialised: true
            };
        default:
            return state;

    }
}

export default appReducer;

export const initialiseApp = () => async (dispatch) => {
    await dispatch(setAuth())
    return (dispatch(setInitialisedSuccess()))  
}


