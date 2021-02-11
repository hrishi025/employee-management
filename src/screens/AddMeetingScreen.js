import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { addMeeting, signup } from '../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { MEETING_ADD_RESET } from '../constants/adminConstants'

const AddMeetingsScreen = (props) => {

    const [meetingDate, setMeetingDate] = useState('')
    const [meetingInfo, setMeetingInfo] = useState('')
    const dispatch = useDispatch()

    const onAddMeeting = () => {
        dispatch(addMeeting(meetingDate, meetingInfo, "not done"))
    }

    const adminAddMeeting = useSelector((store) => store.adminAddMeeting)

    const { loading, response, error } = adminAddMeeting

    useEffect(() => {
        if (response && (response.status == 'success')) {
            dispatch({
                type: MEETING_ADD_RESET
            })
            alert("Meeting details added Successfully")
            props.history.push('/meetings')
        }
        else if (error) {
            alert('error')
        }
    }, [loading, response, error])

    return (
        <div>
            <Header title="Add New Meeting" />
            <hr />
            <div className="form">

                <div className="mb-3">
                    <label className="form-label">Date and time</label>
                    <input
                        onChange={(e) => setMeetingDate(e.target.value)}
                        type="date"
                        placeholder="address"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Meeting Description</label>
                    <textarea
                        onChange={(e) => setMeetingInfo(e.target.value)}
                        placeholder="meeting desc"
                        className="form-control"></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">status</label>
                    <input
                        disabled
                        placeholder="not done"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <button onClick={onAddMeeting} className="btn btn-primary">add</button>
                </div>
            </div>

        </div>
    )
}

export default AddMeetingsScreen
