import React, { useEffect, useState } from "react";
import s from './ProfileStatus.module.css';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const [hoverMode, setHoverMode]=useState(false)

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
    
    const handleMouseEnter = () => {
        setHoverMode(true)
    }

    const handleMouseLeave = () => {
        setHoverMode(false)
    }
    return (
        <div>
            {!editMode &&
                <div className={s.status}>
                    <span onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onDoubleClick={activateEditMode}><b>Status</b>: {props.status || "-----"}</span>
                    { !!hoverMode && !props.userId && 
                    <div className={s.changeStatus}>double click to change</div>}
                </div>
            }
            {editMode &&
                <div className={s.edit}>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}></input>
                </div>
            }
            
        </div>
    )
    
}

export default ProfileStatus;