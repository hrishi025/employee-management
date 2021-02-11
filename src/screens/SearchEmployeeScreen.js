import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import store from '../store'
import { fetchSalarySlip } from '../actions/adminActions'

const SearchEmployeeScreen = (props) => {

    const [empName, setEmpname] = useState('')

    const empSalarySlip = useSelector((store) => store.empSalarySlip)
    const { loading, response, error } = empSalarySlip
    const dispatch = useDispatch()

    const onFind = () => {
        if (empName != '') {
            dispatch(fetchSalarySlip(empName))
        }
    }

    useEffect(() => { }, [error, response, loading])

    return (
        <div>
            <br />
            <Header title="Search Employee" />
            <hr />

            <div className="input-group mb-3">
                <input onChange={(e) => setEmpname(e.target.value)} type="text" className="form-control" placeholder="enter name" ></input>
                <button onClick={onFind} className="btn btn-primary" >Find</button>
            </div>

            <div className="emp-search">
                <div className="row div-search-emp">

                    {/* FOR DISPLAYING NO USER FOUND */}
                    {
                        response &&
                        response.data &&
                        response.data.length == 0 &&

                        <div><h3><strong > NO USER FOUND</strong></h3></div>

                    }

                    {/* FOR DISPLAYING Attendance DETAILS */}
                    {
                        response &&
                        response.data &&
                        response.data.length > 0 &&
                        response.data.map((attendance) => {
                            return (
                                <div>

                                    <div className="row justify-content-center">
                                        <div className="card border-secondary mb-2 col-sm-3 mx-sm-1" >
                                            <div className="card-header">Attendance Report</div>
                                            <p className="card-body">
                                                <strong>Present Days:</strong> {attendance.noOfPresentDay}<br /><br />
                                                <strong>leave Count:</strong> {attendance.leaveCount}
                                            </p>
                                        </div>

                                        <div className="card border-secondary mb-2 col-sm-3  mx-sm-1" >
                                            <div className="card-header">Salary Slip Details </div>
                                            <p className="card-body">
                                                <strong>Total Salary:</strong><br /> {attendance.totalAmount}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div >

        </div >
    )
}

export default SearchEmployeeScreen
