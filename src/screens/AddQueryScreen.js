import { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addQuery } from '../actions/employeeActions'
import { QUERY_ADD_RESET } from '../constants/employeeConstants'

const AddQueryScreen = (props) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const employeeQuerys = useSelector((store) => store.employeeQuerys)
    const { response, loading, error } = employeeQuerys

    useEffect(() => {
        if (response && response.status == 'success') {
            dispatch({
                type: QUERY_ADD_RESET,
            })
            alert("Query Request added Successfully")
            props.history.push('/queries')
        } else if (error) {
            alert(error)
        }
    }, [response, loading, error])

    const dispatch = useDispatch()

    const onAddQuery = () => {
        dispatch(addQuery(title, description, 'not solved'))
    }

    return (
        <div>
            <Header title="Add Query" />
            <hr />
            <div className="form">

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} className="form-control"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} className="form-control" ></input>
                </div>

                <div className="mb-3">
                    <button onClick={onAddQuery} className="btn btn-primary">Add Query</button>
                </div>
            </div>

        </div>
    )
}

export default AddQueryScreen
