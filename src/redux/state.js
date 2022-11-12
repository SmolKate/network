let state = {
    profilePage: {
        postsData: [
            {id:1, message:'Hello!', likesCount:11},
            {id:2, message:'Good morning!', likesCount:120},
            {id:3, message:'How are you?', likesCount:6},
            {id:4, message:'Hi, guys!', likesCount:54},
        ]
    },
    dialogsPage: {
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
    },
    friendsNavbar: {
        friendsData: [
            {id:1, name:'Dima'},
            {id:2, name:'Kate'},
            {id:3, name:'Petr'},
            {id:4, name:'Alena'},
        ],
    }
}

export default state;