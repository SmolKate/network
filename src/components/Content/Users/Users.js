import React from 'react';
import User from './User';
import s from './Users.module.css';


const Users = (props) => {
   
    return (<div className={s.usersContainer}>
        {props.usersData.map( u => <User key={u.id} user={u} isAuth={props.isAuth} isFollowingInProgress={props.isFollowingInProgress} unfollow={props.unfollow} follow={props.follow} />)}
    </div>)
    
}

export default Users;