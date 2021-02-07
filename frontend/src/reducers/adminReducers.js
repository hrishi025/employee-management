import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNOUT,

  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_RESET,
  USER_SIGNUP_SUCCESS,

  MEETING_ADD_REQUEST,
  MEETING_ADD_SUCCESS,
  MEETING_ADD_FAIL,
  MEETING_ADD_RESET,

  LEAVE_FETCH_REQUEST,
  LEAVE_FETCH_SUCCESS,
  LEAVE_FETCH_FAIL,
  LEAVE_FETCH_RESET,

  LEAVE_APPROVE_REQUEST,
  LEAVE_APPROVE_SUCCESS,
  LEAVE_APPROVE_FAIL,
  LEAVE_APPROVE_RESET,

  LEAVE_REJECT_REQUEST,
  LEAVE_REJECT_SUCCESS,
  LEAVE_REJECT_FAIL,
  LEAVE_REJECT_RESET,

  QUERIES_FETCH_REQUEST,
  QUERIES_FETCH_SUCCESS,
  QUERIES_FETCH_FAIL,
  QUERIES_FETCH_RESET,

  QUERIES_STATUS_CHANGE_REQUEST,
  QUERIES_STATUS_CHANGE_SUCCESS,
  QUERIES_STATUS_CHANGE_FAIL,
  QUERIES_STATUS_CHANGE_RESET,

  SALARY_SLIP_FETCH_REQUEST,
  SALARY_SLIP_FETCH_SUCCESS,
  SALARY_SLIP_FETCH_FAIL,
  SALARY_SLIP_FETCH_RESET,

  PRESENT_DAY_FETCH_REQUEST,
  PRESENT_DAY_FETCH_SUCCESS,
  PRESENT_DAY_FETCH_FAIL,
  PRESENT_DAY_FETCH_RESET
} from '../constants/adminConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNUP_RESET:
      return {}
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const addMeetingReducer = (state = {}, action) => {
  switch (action.type) {
    case MEETING_ADD_REQUEST:
      return { loading: true }
    case MEETING_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case MEETING_ADD_FAIL:
      return { loading: false, error: action.payload }
    case MEETING_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const getLeavesReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAVE_FETCH_REQUEST:
      return { loading: true }
    case LEAVE_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case LEAVE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case LEAVE_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const approveLeaveReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAVE_APPROVE_REQUEST:
      return { loading: true }
    case LEAVE_APPROVE_SUCCESS:
      return { loading: false, response: action.payload }
    case LEAVE_APPROVE_FAIL:
      return { loading: false, error: action.payload }
    case LEAVE_APPROVE_RESET:
      return {}
    default:
      return state
  }
}

export const rejectLeaveReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAVE_REJECT_REQUEST:
      return { loading: true }
    case LEAVE_REJECT_SUCCESS:
      return { loading: false, response: action.payload }
    case LEAVE_REJECT_FAIL:
      return { loading: false, error: action.payload }
    case LEAVE_REJECT_RESET:
      return {}
    default:
      return state
  }
}

export const getQueriesReducer = (state = {}, action) => {
  switch (action.type) {
    case QUERIES_FETCH_REQUEST:
      return { loading: true }
    case QUERIES_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case QUERIES_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case QUERIES_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const changeQueryReducer = (state = {}, action) => {
  switch (action.type) {
    case QUERIES_STATUS_CHANGE_REQUEST:
      return { loading: true }
    case QUERIES_STATUS_CHANGE_SUCCESS:
      return { loading: false, response: action.payload }
    case QUERIES_STATUS_CHANGE_FAIL:
      return { loading: false, error: action.payload }
    case QUERIES_STATUS_CHANGE_RESET:
      return {}
    default:
      return state
  }
}

export const getSalarySlipReducer = (state = {}, action) => {
  switch (action.type) {
    case SALARY_SLIP_FETCH_REQUEST:
      return { loading: true }
    case SALARY_SLIP_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case SALARY_SLIP_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case SALARY_SLIP_FETCH_RESET:
      return {}
    default:
      return state
  }
}

export const getPresentDaysReducer = (state = {}, action) => {
  switch (action.type) {
    case PRESENT_DAY_FETCH_REQUEST:
      return { loading: true }
    case PRESENT_DAY_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case PRESENT_DAY_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case PRESENT_DAY_FETCH_RESET:
      return {}
    default:
      return state
  }
}
