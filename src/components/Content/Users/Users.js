import React from 'react';
import User from './User';

const Users = (props) => {
   
    return (<div>
        {props.usersData.map( u => <User key={u.id} user={u} isFollowingInProgress={props.isFollowingInProgress} unfollow={props.unfollow} follow={props.follow} />)}
    </div>)
    
}

export default Users;