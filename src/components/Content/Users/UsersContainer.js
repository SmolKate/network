import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, follow, unfollow, setPageNumber} from '../../../redux/users-reducer'
import Preloader from '../../../common/Preloader/Preloader';


class UsersContainer extends React.Component {
   
    componentDidMount () {
        if (this.props.usersData.length === 0) {
            this.props.getUsers (this.props.pageNumber, this.props.pageSize)
        }
    }
    
    onPageChange = (pageNumber) => { 
        this.props.setPageNumber(pageNumber)
        this.props.getUsers (pageNumber, this.props.pageSize)
    }
    
    render () {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        pageNumber={this.props.pageNumber}
        onPageChange={this.onPageChange}
        usersData={this.props.usersData}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        isFollowingInProgress={this.props.isFollowingInProgress}
        />
        
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        pageNumber: state.usersPage.pageNumber,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch (followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch (unfollowAC(userId))
//         },
//         setUsers: (usersData) => {
//             dispatch (setUsersAC(usersData))
//         },
//         setTotalCount: (totalUsersCount) => {
//             dispatch (setTotalCountAC(totalUsersCount))
//         },
//         setPageNumber: (pageNumber) => {
//             dispatch (setPageNumberAC(pageNumber))
//         },
//         changeIsFetching: (isFetching) => {
//             dispatch (changeIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, 
    {getUsers, follow, unfollow, setPageNumber}) (UsersContainer);