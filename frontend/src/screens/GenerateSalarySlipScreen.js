import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPresentDays } from './../actions/employeeActions';

const GenerateSalarySlipScreen = (props) => {
  const dispatch = useDispatch()
  const empPresent = useSelector((store) => store.empPresent)
  const { error, response, loading } = empPresent

  const userLogin = useSelector((store) => store.userLogin)

  // // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getPresentDays())
  }, [])

  useEffect(() => { }, [error, response, loading])

  return (
    <div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>No of Present Days </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((salslip) => {
              return (
                <tr>
                  <td>{salslip.empId}</td>
                  <td>{salslip.empName}</td>
                  <td>{salslip.email}</td>
                  <td>{salslip.noOfPresentDay}</td>
                  <td><button className="btn btn-outline-primary">Generete Salary Slip</button></td>
                  <td><button className="btn btn-outline-primary">View Salary Slip</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default GenerateSalarySlipScreen
