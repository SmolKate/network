import Friends from "./Friends";
import { connect } from "react-redux";
import { getFollowedUsers, setPageNumber } from "../../../redux/friends-reducer";
import { getIsFollowingInProgress } from "../../../redux/users-selectors";
import { unfollow } from "../../../redux/users-reducer";
import { useEffect } from "react";
import PagesNavigation from "../../../common/PagesNavigation/PagesNavigation";
import s from './Friends.module.css';


const FriendsContainer = (props) => {
    let {friendsData, getFollowedUsers}=props
    useEffect(() => { 
        if (friendsData.length === 0 ) {
            getFollowedUsers()
        }
    }, [getFollowedUsers])
    
    const onPageChange = (pageNumber) => { 
        getFollowedUsers (pageNumber, props.pageSize)
        props.setPageNumber(pageNumber)
        // this.props.getUsers (pageNumber, this.props.pageSize)
    }

    return (<div className={s.friendsComp}>
        <h2>Friends</h2>
        <PagesNavigation totalUsersCount={props.totalUsersCount} 
                pageSize={props.pageSize} 
                pageNumber={props.pageNumber} 
                onPageChange={onPageChange}/>
        <Friends {...props}/>
    </div>)
    
}

let mapStateToProps = (state) => {
    return {
        friendsData : state.friendsNavbar.friendsData,
        isFollowingInProgress: getIsFollowingInProgress(state),
        isAuth: state.auth.isAuth,
        pageSize: state.friendsNavbar.pageSize,
        pageNumber: state.friendsNavbar.pageNumber,
        totalUsersCount: state.friendsNavbar.totalUsersCount,
    }
}

export default connect(mapStateToProps, {getFollowedUsers, unfollow, setPageNumber})(FriendsContainer);

