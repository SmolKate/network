import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import s from './FriendsItem.module.css';
import userPhoto from '../../../../assets/ava3.png';
import { Link } from "react-router-dom";


const FriendsItem = (props) => {
   
    return (
        <div className={s.item}>
            <div className = {s.image}>
                {/* <img src={props.photo || userPhoto}></img> */}
                <Link to={"/profile/"+props.id}><img src={props.photo || userPhoto} /></Link>
            <div className = {s.btn}>
                <button className = {s.unfollowBtn} disabled={props.isFollowingInProgress.some(id => id === props.id)} 
                    onClick={ () => {props.unfollow(props.id)}}>Unfollow</button> 
            </div>
            </div>
            
            <div className={s.name}>
                {props.name}
            </div>         
        </div>
    )
}

export default FriendsItem;