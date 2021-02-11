import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signup } from '../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { USER_SIGNUP_RESET } from '../constants/adminConstants'

const AddNewEmployeeScreen = (props) => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setaddress] = useState('')
    const [confirmpasssword, setConfirmPasssword] = useState('')
    const [mobile, setMobile] = useState('')
    const [birthdate, setbirthdate] = useState('')
    const [gender, setgender] = useState('')
    const [role, setrole] = useState('')

    const dispatch = useDispatch()

    const userSignup = useSelector((store) => store.userSignup)
    const { loading, response, error } = userSignup

    // listen on change of the [loading, response, error] values
    useEffect(() => {
        console.log('use effect called: ')
        console.log('loading: ', loading)
        console.log('response: ', response)
        console.log('error: ', error)

        if (response && response.status == 'success') {
            dispatch({
                type: USER_SIGNUP_RESET
            })
            alert("User Added Successfully")
            // user successfully got registered
            props.history.push('/home')
        } else if (error) {
            // there is an error while making the API call
            console.log(error)
            alert('error while making API call')
        }
    }, [loading, response, error])

    const onSignup = () => {
        if (password == confirmpasssword) {
            dispatch(signup(Name, address, birthdate, gender, email, mobile, password, role))
        }
        else {
            alert('password and confirm password dont match')
        }
    }

    return (
        <div>
            <Header title="Signup Here" />
            <hr />
            <div className="form">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => {
                            setName(e.target.value)
                        }}

                        placeholder="name"
                        className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        type="email"
                        placeholder="email"
                        className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        onChange={(e) => {
                            setaddress(e.target.value)
                        }}

                        placeholder="address"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Birthdate</label>
                    <input
                        onChange={(e) => {
                            setbirthdate(e.target.value)
                        }}
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        type="password"
                        className="form-control"
                        placeholder="*****"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        onChange={(e) => {
                            setConfirmPasssword(e.target.value)
                        }}
                        type="password"
                        className="form-control"
                        placeholder="*****"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender</label><br />

                    <input onChange={(e) => setgender(e.target.value)} type="radio" name="gender" value="male"></input>
                    <label for="male"> Male</label><br />

                    <input onChange={(e) => setgender(e.target.value)} type="radio" name="gender" value="female"></input>
                    <label for="female"> Female</label><br />

                    <input onChange={(e) => setgender(e.target.value)} type="radio" name="gender" value="other"></input>
                    <label for="other"> Other</label>
                </div>

                <div className="mb-3">
                    <label className="form-label">mobile</label>
                    <input
                        onChange={(e) => {
                            setMobile(e.target.value)
                        }}

                        placeholder="mobile"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role</label><br />

                    <input onChange={(e) => setrole(e.target.value)} type="radio" name="role" value="admin"></input>
                    <label for="male"> admin</label><br />

                    <input onChange={(e) => setrole(e.target.value)} type="radio" name="role" value="employee"></input>
                    <label for="female"> employee</label><br />
                </div>

                <div className="mb-3">
                    <label className="form-label">Photo</label>
                    <input
                        type="file"
                        placeholder="mobile"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <button onClick={onSignup} className="btn btn-success">
                        Singup
                    </button>

                </div>
            </div>

            {userSignup.loading && <div>waiting for result</div>}
        </div>
    )
}

export default AddNewEmployeeScreen
