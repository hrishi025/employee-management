import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/adminActions'

const AdminNavBar = (props) => {
    const dispatch = useDispatch()
    const userSignin = useSelector((store) => store.userLogin)

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            {/* {userSignin.response &&  
      (*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home">
                        <span className="navbar-brand">Home</span>
                    </Link>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/addnewemployee">
                                    <span className="nav-link">Add New Employee</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/searchemployee">
                                    <span className="nav-link">Search Employee</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/meetings">
                                    <span className="nav-link">Meetings</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/home">
                                    <span className="nav-link">Leaves</span>
                                </Link>
                            </li>

                            <li className="nav-item-dark">
                                <Link to="/queries">
                                    <span className="nav-link">Queries</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/generatesalaryslip">
                                    <span className="nav-link">Generate Salary Slip</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button onClick={onLogout} className="btn btn-success">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/*
      )
       } */}
        </div >
    )
}

export default AdminNavBar
