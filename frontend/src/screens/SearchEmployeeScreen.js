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
                                <div className="col-sm div-attendance">
                                    <strong>Attendance Report</strong>
                                    <div>
                                        <div>
                                            <div>Present Days: {attendance.noOfPresentDay}</div>
                                            <div>leave Count: {attendance.leaveCount}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* FOR DISPLAYING SALARY DETAILS */}
                    {
                        response &&
                        response.data &&
                        response.data.length > 0 &&
                        response.data.map((salary) => {
                            return (
                                <div className="col-sm div-sal">
                                    <strong>Salary Slip Details</strong>
                                    <div >
                                        <div>
                                            <div>Total Salary: {salary.totalAmount}</div>
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
