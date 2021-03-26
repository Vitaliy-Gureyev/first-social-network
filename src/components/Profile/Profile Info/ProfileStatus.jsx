import React from 'react';
import classes from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    activateEditMode() {
        this.setState({
            editMode: false
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <>
                {this.state.editMode == true ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;