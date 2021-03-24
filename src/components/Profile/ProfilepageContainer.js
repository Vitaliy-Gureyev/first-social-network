import React from 'react';
import {connect} from "react-redux";
import {getProfilePage} from "../../redux/profile-reducer";
import ProfilePage from "./Profilepage";
import {withRouter} from "react-router-dom";


class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getProfilePage(userId)
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfilePageContainer);

export default connect (mapStateToProps, {
    getProfilePage
}) (withUrlDataContainerComponent);