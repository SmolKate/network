import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }

    const activateEditMode = () => {
        if (!props.userId) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        props.updateStatus(status)
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }; 
    

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>status: {props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
            
        </div>
    )
    
}

export default ProfileStatus;