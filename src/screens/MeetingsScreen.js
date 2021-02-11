import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeetings } from './../actions/employeeActions';
import Header from './../components/Header';

const QueriesScreen = (props) => {
    const dispatch = useDispatch()
    const employeeMeetings = useSelector((store) => store.employeeMeetings)
    const { error, response, loading } = employeeMeetings

    const userLogin = useSelector((store) => store.userLogin)

    // // call this only once (when the page has loaded successfully)
    useEffect(() => {
        dispatch(getMeetings())
    }, [])

    useEffect(() => { }, [error, response, loading])

    const onAddNewMeeting = () => {
        props.history.push('/addmeetingscreen')
    }

    return (
        <div>
            <Header title="Meetings" />
            <hr />
            {
                userLogin.response && userLogin.response.data.role == 'admin' &&
                <div>
                    <br />
                    <button onClick={onAddNewMeeting} className="btn btn-primary float-start">Add New Meeting</button>
                </div>
            }

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>MeetingId</th>
                        <th>Meeting Info</th>
                        <th>Meeting Date Time</th>
                        <th>Meeting Status</th>
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
                            response.data.map((meeting) => {
                                return (
                                    <tr>
                                        <td>{meeting.meetingId}</td>
                                        <td>{meeting.meetingDate}</td>
                                        <td>{meeting.meetingInfo}</td>
                                        <td>{meeting.meetingStatus}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                }
            </table>
        </div>
    )
}

export default QueriesScreen
