const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    })
let initialState = {
    dialogsData: [
        {id:1, name:'Dima'},
        {id:2, name:'Kate'},
        {id:3, name:'Petr'}
      ],
    messagesData: [
        {id:1, name: 'me', message:'Hi'},
        {id:2, name: 'Dima', message:'Hello'},
        {id:3, name: 'me', message:'Chears'}
      ],
    newMessageText:'hi',
};

const dialogsReducer = (state=initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:4, 
                name: 'Dima', 
                message:  state.newMessageText
            };
            return stateCopy = {
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                    newMessageText: ''
                }
            
        case UPDATE_NEW_MESSAGE_TEXT:
            return stateCopy = {
                    ...state,
                    newMessageText: action.newText
                }
            
        default:
            return state;
    };
}

export default dialogsReducer;