import {

  QUERIES_FETCH_FAIL,
  QUERIES_FETCH_SUCCESS,
  QUERIES_FETCH_REQUEST,

  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNOUT,

  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,

  MEETING_ADD_REQUEST,
  MEETING_ADD_SUCCESS,
  MEETING_ADD_FAIL,

  LEAVE_FETCH_SUCCESS,
  LEAVE_FETCH_REQUEST,
  LEAVE_FETCH_FAIL,

  QUERIES_STATUS_CHANGE_REQUEST,
  QUERIES_STATUS_CHANGE_SUCCESS,
  QUERIES_STATUS_CHANGE_FAIL,
  QUERIES_STATUS_CHANGE_RESET,
  SALARY_SLIP_FETCH_SUCCESS
} from '../constants/adminConstants'
import axios from 'axios'
import { SALARY_SLIP_FETCH_REQUEST, SALARY_SLIP_FETCH_FAIL } from './../constants/adminConstants';

export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('token')
    dispatch({ type: USER_SIGNOUT })
    document.location.href = '/login'
  }
}

export const signup = (empName, address, birth_date, gendor, email, mobile, password, role) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      empName,
      address,
      birth_date,
      gendor,
      email,
      mobile,
      password,
      role
    }

    const url = 'http://localhost:4000/user/signup'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      email,
      password,
    }

    const url = 'http://localhost:4000/user/login'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error,
        })
      })
  }
}

export const addMeeting = (meetingDate, meetingInfo, meetingStatus) => {
  return (dispatch) => {
    dispatch({
      type: MEETING_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        'token': sessionStorage['token'],
      },
    }

    const body = {
      meetingDate, meetingInfo, meetingStatus
    }
    const url = 'http://localhost:4000/meeting/add'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: MEETING_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: MEETING_ADD_FAIL,
          payload: error,
        })
      })
  }
}

export const getLeaves = () => {
  return (dispatch) => {
    dispatch({
      type: LEAVE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:4000/leave/getAll'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: LEAVE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: LEAVE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const approveLeave = (leaveStatus, leaveId) => {
  return (dispatch) => {
    dispatch({
      type: LEAVE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:4000/leave'

    const body = {
      leaveStatus,
      leaveId,
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: LEAVE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: LEAVE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const rejectLeave = (leaveStatus, leaveId) => {
  return (dispatch) => {
    dispatch({
      type: LEAVE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:4000/leave'

    const body = {
      leaveStatus,
      leaveId,
    }

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: LEAVE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: LEAVE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getQueries = () => {
  return (dispatch) => {
    dispatch({
      type: QUERIES_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:4000/query/getAll'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: QUERIES_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: QUERIES_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const changeQueryStatus = (qId, queryStatus) => {
  return (dispatch) => {
    dispatch({
      type: QUERIES_STATUS_CHANGE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:4000/query'

    const body = {
      qId, queryStatus,
    }

    axios
      .patch(url, body, header)
      .then((response) => {
        dispatch({
          type: QUERIES_STATUS_CHANGE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: QUERIES_STATUS_CHANGE_FAIL,
          payload: error,
        })
      })
  }
}

export const fetchSalarySlip = (empName) => {
  return (dispatch) => {
    dispatch({
      type: SALARY_SLIP_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      empName,
    }

    const url = 'http://localhost:4000/salary-slip'

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: SALARY_SLIP_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SALARY_SLIP_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
