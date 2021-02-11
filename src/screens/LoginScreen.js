import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { USER_SIGNOUT } from '../constants/adminConstants'

const LoginScreen = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector((store) => store.userLogin)
    const { loading, error, response } = userLogin

    const dispatch = useDispatch()
    const onSignin = () => {
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if (response && response.error == "User does not exist") {
            dispatch({
                type: USER_SIGNOUT
            })
            alert("Invalid Email or Password")
            props.history.push('/emplogin')
        }
        else {
            if (response && response.status == 'success') {
                sessionStorage.setItem('token', response.data.token)
                props.history.push('/home')
            } else if (response && response.status == 'error') {
                alert(response.error)
            } else if (error) {
                alert(error)
            }
        }
    }, [loading, error, response])

    return (
        <div >
            <div className="row justify-content-center">
                <div className="text-black bg-white mb-2 col-sm-4 mx-sm-1">
                    <Header title="Login Here 👦" />
                    <hr />
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            className="form-control"
                            placeholder="test@test.com"
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
                        <button onClick={onSignin} className="btn btn-primary">
                            Login
                                </button>
                    </div>
                </div>
                {
                    loading &&
                    <div className="d-flex justify-content-center" >
                        <div className="spinner-border spinner-border-sm " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div >
                                &nbsp;&nbsp;waiting for response from server..!!👨‍💻<br /><strong>Used developement server so login might take time..!!</strong>😅
                    </div>
                }

            </div>


            {/* DEMO LOGIN DETAILS */}
            < div >

                <div className="row justify-content-center">
                    <div className="card text-white bg-dark mb-2 col-sm-3 mx-sm-1" >
                        <div className="card-header">🛡️ Admin Login </div>
                        <p className="card-body">
                            <strong>Email:</strong><br /> admin@gmail.com<br /><br />
                            <strong >Password:</strong><br />  admin
                        </p>
                    </div>

                    <div className="card text-white bg-dark mb-2 col-sm-3  mx-sm-1" >
                        <div className="card-header">👨‍💼 Employee Login </div>
                        <p className="card-body">
                            <strong>Email:</strong><br /> employee@gmail.com<br /><br />
                            <strong >Password:</strong><br />  employee
                        </p>
                    </div>
                </div>

            </ div>
        </div >
    )
}

export default LoginScreen
