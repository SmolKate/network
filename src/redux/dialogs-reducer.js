const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage})

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
};

const dialogsReducer = (state=initialState, action) => {
    
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:4,
                name: 'Dima',
                message: action.newMessage
            }
            return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                }
            
        default:
            return state;
    };
}

export default dialogsReducer;