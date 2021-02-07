import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQueries } from '../actions/adminActions'
import Header from '../components/Header'
import { changeQueryStatus } from './../actions/adminActions';

const QueriesScreen = (props) => {

  const dispatch = useDispatch()

  const empqueries = useSelector((store) => store.empqueries)
  const { loading, response, error } = empqueries

  const userLogin = useSelector((store) => store.userLogin)

  // // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getQueries())
  }, [])

  useEffect(() => { }, [error, response, loading])

  const onAddQuery = () => {
    props.history.push('/addquery')
  }

  const onStatusChange = (qId) => {
    dispatch(changeQueryStatus(qId, 'solved'))
    props.history.push('/home')
  }

  return (
    <div>
      <Header title="Queries" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Employee Name</th>
            <th></th>
          </tr>
        </thead>

        {
          <tbody>
            {
              response &&
              response.data &&
              response.data.length > 0 &&
              response.data.map((query) => {
                return (
                  <tr>
                    <td>{query.qId}</td>
                    <td>{query.queryTitle}</td>
                    <td>{query.queryDesc}</td>
                    <td><strong>{query.queryStatus}</strong></td>
                    <td>{query.empName}</td>
                    { userLogin.response && userLogin.response.data.role == 'admin' && query.queryStatus == 'not solved' &&
                      <td><button onClick={() => onStatusChange(query.qId)}>Change status to Solved</button></td>
                    }
                  </tr>
                )
              })
            }
          </tbody>
        }

      </table>

      {/* Show Add Query button only for employee login */}
      {
        userLogin.response && userLogin.response.data.role == 'employee' &&
        <div div >
          <button onClick={onAddQuery} className="btn btn-success">Add Query</button>
        </div>
      }
    </div >
  )
}

export default QueriesScreen
