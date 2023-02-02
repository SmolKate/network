import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, follow, unfollow, setPageNumber} from '../../../redux/users-reducer'
import { getUsersData, getPageSize, getPageNumber, getTotalUsersCount, getIsFetching, getIsFollowingInProgress } from '../../../redux/users-selectors';

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

export default connect(mapStateToProps, 
    {getUsers, follow, unfollow, setPageNumber}) (Users);