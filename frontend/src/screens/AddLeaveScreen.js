import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addLeave } from './../actions/employeeActions';
import { LEAVE_ADD_RESET } from '../constants/employeeConstants';

const AddLeaveScreen = (props) => {

    const [leaveDate, setleaveDate] = useState('')
    const [purpose, setpurpose] = useState('')

    const employeeLeaves = useSelector((store) => store.employeeLeaves)
    const { response, loading, error } = employeeLeaves

    useEffect(() => {
        if (response && response.status == 'success') {
            dispatch({
                type: LEAVE_ADD_RESET,
            })
            alert("Leave Request added Successfully")
        } else if (error) {
            alert(error)
        }
    }, [response, loading, error])

    const dispatch = useDispatch()

    const onAddLeave = () => {
        dispatch(addLeave(leaveDate, purpose, 'pending'))
    }

    return (
        <div>
            <Header title="Add Leave" />
            <hr />
            <div className="form">

                <div className="mb-3">
                    <label className="form-label">Date and time</label>
                    <input
                        onChange={(e) => {
                            setleaveDate(e.target.value)
                        }}
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Leave Purpose</label>
                    <input
                        onChange={(e) => {
                            setpurpose(e.target.value)
                        }}
                        placeholder="purpose"
                        className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">status</label>
                    <input
                        disabled
                        placeholder="pending(readonly)"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <button onClick={onAddLeave} className="btn btn-primary">Add Leave</button>
                </div>
            </div>

        </div>
    )
}

export default AddLeaveScreen
