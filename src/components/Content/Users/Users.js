import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../../assets/userPhoto.jpeg';
import { Link } from 'react-router-dom';

const Users = (props) => {
   
    let pagesCount = props.totalUsersCount/props.pageSize;
    let pages = [];
    for (let i=1; i<=pagesCount ; i++) {
        pages.push(i);
    }
    let curPage=props.pageNumber;
    let curPageFirst=((curPage-5)<0) ? 0 : curPage-5;
    let curPageLast=curPage+4;
    let slicedPages=pages.slice(curPageFirst, curPageLast)
        
    return (<div>
        <div>
            {slicedPages.map ( p => {
                return <span onClick={() => { props.onPageChange(p)}} className={p===props.pageNumber ? s.selectedPage : ''}> {p} </span>
            })}
        
        
        </div>
        {props.usersData.map( u => <div key={u.id}>
            <span>
                <div className={s.photo}>
                    <Link to={"/profile/"+u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} /></Link>
                </div>
                <div>
                    {u.followed 
                        ? <button disabled={props.isFollowingInProgress.some(id => id === u.id)} 
                            onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button disabled={props.isFollowingInProgress.some(id => id === u.id)} 
                            onClick={ () => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
        </div>)}
    </div>)
    
}

export default Users;