import React from "react";
import Profile from "./Profile";
import { getProfile, setProfile } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    // componentDidMount () {
    //     const {userId} = useParams();
    //     debugger;
    //     // const {userId} = this.props.match.params
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //         .then( responce => 
    //             {
    //                 this.props.setProfile(responce.data)
    //             })
    //         }
    

    render () {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userAuthId: state.auth.id,
        isAuthFetching: state.auth.isAuthFetching,
    }
}


export default compose(
    connect (mapStateToProps, {getProfile}), 
    withAuthRedirect)(ProfileContainer);
