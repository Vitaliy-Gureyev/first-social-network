import React from 'react';
import {connect} from "react-redux";
import {getProfilePage, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import ProfilePage from "./Profilepage";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfilePageContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfilePage(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <ProfilePage {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        getProfilePage,
        getStatus,
        updateStatus,
        savePhoto,
    }),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer)