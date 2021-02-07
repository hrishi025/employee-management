import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { signin } from '../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'

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
        if (response && response.status == 'success') {
            sessionStorage.setItem('token', response.data.token)
            props.history.push('/home')
        } else if (response && response.status == 'error') {
            alert(response.error)
        } else if (error) {
            alert(error)
        }
    }, [loading, error, response])

    return (

        <table className="table">
            <tr className="row">
                <td className="col-3"></td>
                <td className="col-6">

                    <div>
                        <Header title="Login Here" />
                        <hr />
                        <div className="form">
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
                                    className="form-control"
                                    placeholder="*****"></input>
                            </div>
                            <div className="mb-3">
                                <button onClick={onSignin} className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                        {loading && <div>waiting for response</div>}
                    </div>

                </td>
                <td className="col-3"></td>
            </tr>
        </table>

    )
}

export default LoginScreen
