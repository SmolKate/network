import React from 'react';
import s from './UsersContainer.module.css'
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, follow, unfollow, setPageNumber} from '../../../redux/users-reducer'
import Preloader from '../../../common/Preloader/Preloader';
import PagesNavigation from '../../../common/PagesNavigation/PagesNavigation';
import { getUsersData, getPageSize, getPageNumber, getTotalUsersCount, getIsFetching, getIsFollowingInProgress } from '../../../redux/users-selectors';


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
        return <div>
        <div className={s.preloaderBlock}>
            {this.props.isFetching ? <div>Loading...</div> : null}
        </div>
            
            <div className={s.pagesBlock}>
                <PagesNavigation totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize} 
                    pageNumber={this.props.pageNumber} 
                    onPageChange={this.onPageChange}/>
            </div>
            <div>
                <Users usersData={this.props.usersData}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                    isAuth={this.props.isAuth}
                />
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        pageNumber: getPageNumber(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}
// let mapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         pageNumber: state.usersPage.pageNumber,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress,
//     }
// }
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