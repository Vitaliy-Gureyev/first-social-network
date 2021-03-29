import React from 'react';
import classes from './ProfileInfo.module.css'


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

    render() {
        return (
            <>
                {this.state.editMode == true ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;