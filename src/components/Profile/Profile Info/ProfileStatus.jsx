import React from 'react';
import classes from './ProfileInfo.module.css'
import dialogReducer from "../../../redux/dialogs-reducer";


class ProfileStatus extends React.Component {
    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode == true ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;