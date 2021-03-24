import React from 'react';
import {connect} from "react-redux";
import {getProfilePage} from "../../redux/profile-reducer";
import ProfilePage from "./Profilepage";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps, {
    getProfilePage
}) (withUrlDataContainerComponent);