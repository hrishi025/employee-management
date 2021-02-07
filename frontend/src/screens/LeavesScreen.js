import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveLeave, getLeaves, rejectLeave } from './../actions/adminActions';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LeavesScreen = (props) => {
    const dispatch = useDispatch()
    const empLeaves = useSelector((store) => store.empLeaves)
    const { error, response, loading } = empLeaves

    const empapproveLeave = useSelector((store) => store.empapproveLeave)
    const { aerror, aresponse, aloading } = empapproveLeave

    const emprejectLeave = useSelector((store) => store.emprejectLeave)
    const { rerror, rresponse, rloading } = emprejectLeave

    // // // call this only once (when the page has loaded successfully)
    useEffect(() => {
        dispatch(getLeaves())
    }, [aerror, aresponse, aloading, rerror, rresponse, rloading])

    useEffect(() => {
        dispatch(getLeaves())
    }, [aerror, aresponse, aloading])

    useEffect(() => {
        dispatch(getLeaves())
    }, [rerror, rresponse, rloading])

    useEffect(() => { }, [error, response, loading])

    const onApprove = (leaveid) => {
        dispatch(approveLeave("approved", leaveid))
        props.history.push('/home')
    }

    const onReject = (leaveid) => {
        dispatch(rejectLeave("rejected", leaveid))
        props.history.push('/home')
    }

    return (
        <div>
            <Header title="Leave" />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>LeaveId</th>
                        <th>Leave Date</th>
                        <th>Leave Purpose</th>
                        <th>Employee Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    <tbody>
                        {
                            response &&
                            response.data &&
                            response.data.length > 0 &&
                            response.data.map((leave) => {
                                return (
                                    <tr>
                                        <td>{leave.leaveId}</td>
                                        <td>{leave.leaveDate}</td>
                                        <td>{leave.leavePurpose}</td>
                                        <td>{leave.empname}</td>
                                        <td><Link><a onClick={() => onApprove(leave.leaveId)}>approve</a></Link></td>
                                        <td><Link><a onClick={() => onReject(leave.leaveId)}>reject</a></Link></td>
                                    </tr>
                                )
                            })
                        }

                        {
                            response &&
                            response.data &&
                            response.data.length == 0 &&
                            <tr>
                                <td></td>
                                <td></td>
                                <h1 className="table-error" >NO LEAVE REQUESTS</h1>
                                <td></td>
                                <td></td>
                            </tr>
                        }
                    </tbody>
                }
            </table>
        </div >
    )
}

export default LeavesScreen
