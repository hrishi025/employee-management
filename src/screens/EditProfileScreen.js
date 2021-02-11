import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../actions/employeeActions'
import { PROFILE_UPDATE_RESET } from './../constants/employeeConstants';
import { getProfile } from './../actions/employeeActions';

const EditProfileScreen = (props) => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()

    const empProfile = useSelector((store) => store.empProfile)

    // // call this only once (when the page has loaded successfully)
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    useEffect(() => { }, [empProfile.error, empProfile.response, empProfile.loading])


    const empProfileUpdate = useSelector((store) => store.empProfileUpdate)
    const { error, response, loading } = empProfileUpdate

    useEffect(() => {
        console.log('inside useeffect')
        console.log(response)
        if (response && response.status == 'success') {
            dispatch({
                type: PROFILE_UPDATE_RESET,
            })
            alert('profile updated successfuly')
        } else if (error) {
            alert('error')
        }
    }, [loading, response, error])

    const onUpdate = () => {
        dispatch(updateProfile(email, phone))
    }

    return (
        <div>
            <Header title="Edit Profile" />
            <hr />
            <div className="form">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    {
                        empProfile.response &&
                        empProfile.response.data &&
                        empProfile.response.data.length > 0 &&
                        empProfile.response.data.map((user) => {
                            return (
                                <input disabled placeholder={user.empName} className="form-control"></input>
                            )
                        })
                    }

                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Upload Photo</label>
                    <input
                        type="file"
                        placeholder=""
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <button onClick={onUpdate} className="btn btn-primary">
                        Update
                    </button>

                </div>
            </div>

        </div >
    )
}

export default EditProfileScreen
